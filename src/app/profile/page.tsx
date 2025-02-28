"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Menu, Input } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { Header } from "../components/sections/Header";

export default function Profile() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/almaty_bg3.jpg')" }}>
      <Header/>
    </div>
  );
}
