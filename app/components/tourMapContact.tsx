"use client";

import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import LineString from "ol/geom/LineString";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style, Stroke } from "ol/style";
import { boundingExtent, buffer as bufferExtent } from "ol/extent";

type Location = {
  name: string;
  lat: number;
  lon: number;
};

type TourMapProps = {
  locations: Location[];
};

export default function TourMapContact({ locations }: TourMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map>();

  // ResizeObserver để cập nhật map size nếu div thay đổi
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (mapInstance.current) {
        mapInstance.current.updateSize();
      }
    });

    if (mapRef.current) {
      resizeObserver.observe(mapRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || locations.length === 0) return;

    // Tạo marker từ danh sách locations
    const features = locations?.map((loc) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([loc.lon, loc.lat])),
        name: loc.name,
      });
      feature.setStyle(
        new Style({
          image: new Icon({
            src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            scale: 0.05,
          }),
        })
      );
      return feature;
    });

    // Tạo tuyến đường nối các điểm
    const routeFeature = new Feature({
      geometry: new LineString(
        locations?.map((loc) => fromLonLat([loc.lon, loc.lat]))
      ),
    });
    routeFeature.setStyle(
      new Style({
        stroke: new Stroke({
          color: "#007bff",
          width: 2,
        }),
      })
    );

    // Tạo vector layer
    const vectorSource = new VectorSource({
      features: [...features, routeFeature],
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Tính extent và buffer ra 10km (10,000 mét)
    const coords = locations?.map((loc) => fromLonLat([loc.lon, loc.lat]));
    const extent = bufferExtent(boundingExtent(coords), 500);

    if (!mapInstance.current) {
      // Khởi tạo map
      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        view: new View({
          center: fromLonLat([locations[0].lon, locations[0].lat]),
          zoom: 6,
        }),
      });

      // Đợi DOM render xong rồi mới fit + updateSize
      setTimeout(() => {
        mapInstance.current?.updateSize();
        mapInstance.current?.getView().fit(extent, {
          padding: [50, 50, 50, 50],
          duration: 1000,
        });
      }, 100);
    } else {
      // Cập nhật layer và fit lại
      mapInstance.current.getLayers().setAt(1, vectorLayer);
      mapInstance.current.getView().fit(extent, {
        padding: [50, 50, 50, 50],
        duration: 1000,
      });
      mapInstance.current.updateSize();
    }

    // Cleanup
    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = undefined;
      }
    };
  }, [locations]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[200px] mt-[2%] mx-auto rounded-xl shadow max-md:w-[90vw] max-[800px]:order-1"
      style={{
        border: "1px solid #ccc",
        minHeight: "400px",
      }}
    />
  );
}
