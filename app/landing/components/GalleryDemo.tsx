"use client";

import React from "react";
import PandoraAutoGallery from "./PandoraAutoGallery";

export default function GalleryDemo() {
  const images = [
    {
      id: "1",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986843/1_rfgoxd.png",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "11",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768987235/z7432888549410_496f9342fe5f4814e4b4c0d010e83e1a_zog1ac.jpg",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "12",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768987219/z7432888180677_482ad04b873aa3e06ea8c8dcf41e2e7f_riutgl.jpg",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "2",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986788/z7448937434940_c477b9c01e5515e5baebf998ae910ff6_wlvheh.jpg",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "3",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986787/z7437528365903_8f824729b33eff610a4908319f785bff_iqo6zx.jpg",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "4",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986675/ChatGPT_Image_13_55_48_14_thg_1_2027_kvtet7.png",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "9",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768987222/z7434701395256_51954e65436cdf50dcd29013fe21ee9e_ojgnqo.jpg",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "7",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986659/Gemini_Generated_Image_meserxmeserxmese_2_rvl4mk.png",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "14",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768987618/z7448943335209_7668de57e367b256a1a6d52271617f6b_m1fbou.jpg",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "13",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768987252/z7443013431759_0874ec1cf480943d855100f8b34e76ef_yocde7.jpg",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "5",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986670/ChatGPT_Image_13_58_28_14_thg_1_2027_jgwfrv.png",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },

    {
      id: "6",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986662/Gemini_Generated_Image_dn4a3qdn4a3qdn4a_2_zlrg5m.png",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
    {
      id: "8",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1768986653/IMG_0158_2_ctieex.jpg",
      alt: "Bố thắng Macan iNC",
      caption: "Bố thắng Macan iNC",
    },
  ];

  return (
    <PandoraAutoGallery
      images={images}
      rowHeight={200}
      minRowHeight={170}
      maxRowHeight={240}
      gap={12}
      // panelCapacity={10}
    />
  );
  //   <PandoraAutoGallery images={images} className="my-10" />;
}
