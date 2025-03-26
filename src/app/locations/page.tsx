"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Menu } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";

export default function Locations() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-white">      
      <Header/>

      <h1 style={{ fontSize: "35px", fontWeight: "bold", marginBottom: "40px", textAlign: "center", color: "#0A0F0C" }}>Карта с интересными локациями Алматы</h1>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "500px" }}>
      <iframe 
          src="/business.html" 
          width="80%" 
          height="500px" 
          style={{ border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }} 
        />
      </div>

      <Footer/>
    </div>
  );
}
