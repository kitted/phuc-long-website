"use client";

import React from "react";
import PandoraAutoGallery from "./PandoraAutoGallery";

export default function GalleryDemo() {
  const images = [
    {
      id: "1",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311878/z7304167677754_ce90af5cef9cfe20214f4586c6c605bf_hd4fc2.jpg",
      alt: "Chứng nhận 1",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "2",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311676/z7176860160344_2beb22676849dde5b8ac7b2b0f1e6cfe_enbwjp.jpg",
      alt: "Chứng nhận 2",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "3",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311863/z7171592044751_77e0c2a17f2a22974a8085080f4801ad_uvmqiv.jpg",
      alt: "Chứng nhận 3",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "4",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1764692126/z7283661239738_8624e2c72785d384c0b45c48d66e7fd2_bp7jla.jpg",
      alt: "Chứng nhận 4",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "5",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1764692126/z7283661257177_f9c47314cee5777a7ea9515827b02258_umg76j.jpg",
      alt: "Chứng nhận 5",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "6",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766305003/z2183053590020_877e1d13c9ab99648cd241ef20c6b018_gxyfyt.jpg",
      alt: "Chứng nhận 6",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "7",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311878/z7304167677754_ce90af5cef9cfe20214f4586c6c605bf_hd4fc2.jpg",
      alt: "Chứng nhận 1",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "8",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311676/z7176860160344_2beb22676849dde5b8ac7b2b0f1e6cfe_enbwjp.jpg",
      alt: "Chứng nhận 2",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "9",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311863/z7171592044751_77e0c2a17f2a22974a8085080f4801ad_uvmqiv.jpg",
      alt: "Chứng nhận 3",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "10",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1764692126/z7283661239738_8624e2c72785d384c0b45c48d66e7fd2_bp7jla.jpg",
      alt: "Chứng nhận 4",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "11",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1764692126/z7283661257177_f9c47314cee5777a7ea9515827b02258_umg76j.jpg",
      alt: "Chứng nhận 5",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "12",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766305003/z2183053590020_877e1d13c9ab99648cd241ef20c6b018_gxyfyt.jpg",
      alt: "Chứng nhận 6",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "13",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311878/z7304167677754_ce90af5cef9cfe20214f4586c6c605bf_hd4fc2.jpg",
      alt: "Chứng nhận 1",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "14",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311676/z7176860160344_2beb22676849dde5b8ac7b2b0f1e6cfe_enbwjp.jpg",
      alt: "Chứng nhận 2",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "15",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311863/z7171592044751_77e0c2a17f2a22974a8085080f4801ad_uvmqiv.jpg",
      alt: "Chứng nhận 3",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "16",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1764692126/z7283661239738_8624e2c72785d384c0b45c48d66e7fd2_bp7jla.jpg",
      alt: "Chứng nhận 4",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "17",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1764692126/z7283661257177_f9c47314cee5777a7ea9515827b02258_umg76j.jpg",
      alt: "Chứng nhận 5",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "18",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766305003/z2183053590020_877e1d13c9ab99648cd241ef20c6b018_gxyfyt.jpg",
      alt: "Chứng nhận 6",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "19",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311878/z7304167677754_ce90af5cef9cfe20214f4586c6c605bf_hd4fc2.jpg",
      alt: "Chứng nhận 1",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "20",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311676/z7176860160344_2beb22676849dde5b8ac7b2b0f1e6cfe_enbwjp.jpg",
      alt: "Chứng nhận 2",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "21",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766311863/z7171592044751_77e0c2a17f2a22974a8085080f4801ad_uvmqiv.jpg",
      alt: "Chứng nhận 3",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "22",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1764692126/z7283661239738_8624e2c72785d384c0b45c48d66e7fd2_bp7jla.jpg",
      alt: "Chứng nhận 4",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "23",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1764692126/z7283661257177_f9c47314cee5777a7ea9515827b02258_umg76j.jpg",
      alt: "Chứng nhận 5",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
    {
      id: "25",
      url: "https://res.cloudinary.com/dkxb7klnn/image/upload/v1766305003/z2183053590020_877e1d13c9ab99648cd241ef20c6b018_gxyfyt.jpg",
      alt: "Chứng nhận 6",
      caption: "Chứng nhận – Sản phẩm/Dịch vụ Hàng đầu Việt Nam 2014",
    },
  ];

  return (
    <PandoraAutoGallery
      images={images}
      rowHeight={200}
      minRowHeight={170}
      maxRowHeight={240}
      gap={12}
      panelCapacity={10}
    />
  );
  //   <PandoraAutoGallery images={images} className="my-10" />;
}
