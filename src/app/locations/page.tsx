"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Menu } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { Header } from "../components/sections/Header";

export default function Locations() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-white">      
      <Header/>

    </div>
  );
}
