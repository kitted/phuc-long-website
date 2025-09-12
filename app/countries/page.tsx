"use client";
import { Plane, Ship, Car, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import SubLayout from "../subLayout";
import Particles from "../components/particles";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Search from "../components/search";
import Destination from "../components/destination";
import Select from "../components/select";
import Blog from "../components/blog";
import PopularSearches from "../components/popularSearch";

export default function Example() {
  const key: string = process.env.NEXT_PUBLIC_EMAILJS_API_KEY || "";
  const services_id: string =
    process.env.NEXT_PUBLIC_EMAILJS_API_SERVICE_ID || "";
  const template_id: string =
    process.env.NEXT_PUBLIC_EMAILJS_API_TEMPLATE_ID || "";

  // if (!key || !services_id || !template_id) {
  // 	throw new Error("Missing required environment variables for EmailJS.");
  // }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        services_id,
        template_id,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        key
      );

      toast.success("Successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      console.error("Email gửi thất bại:", err.text);
      toast.success("Error sending email");
    }
  };

  return (
    <SubLayout>
      <div className="relative px-6 pt-20 sm:pt-52">
        <Particles className="absolute inset-0 -z-10" quantity={25} />
      </div>

      {/* <NewDestinationsSection />

      <div
        className="px-6 mx-auto max-w-7xl space-y-8 sm:pt-52"
        ref={contentRef}
      >
        <Particles className="absolute inset-0 -z-10" quantity={50} />
        <Tour />
      </div>

      <PopularSearches />

      <div className="px-6 mx-auto max-w-7xl space-y-8" ref={contentRef}>
        <Particles className="absolute inset-0 -z-10" quantity={75} />
        <DomesticTour />
        <Select />
        <Blog />
      </div> */}
    </SubLayout>
  );
}
