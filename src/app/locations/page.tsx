"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Menu } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";

export default function Locations() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-white">      
      <header className="absolute top-0 left-0 w-full bg-[#0A0F0C] py-4 z-10">
        <nav className="container mx-auto flex justify-between items-center px-8">
          <button onClick={() => router.push("/")}> 
            <Image src="/images/logo.jpg" alt="Sayahat.AI Logo" width={150} height={50} className="h-auto" />
          </button>
          <Menu mode="horizontal" theme="dark" className="bg-[#0A0F0C]">
            <Menu.Item key="1"><Button onClick={() => router.push("/routes")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Маршруты</Button></Menu.Item>
            <Menu.Item key="2"><Button onClick={() => router.push("/locations")} style={{ backgroundColor: '#153A29', borderColor: '#1C5A41', color: 'white' }}>Локации</Button></Menu.Item>
            <Menu.Item key="3"><Button onClick={() => router.push("/events")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Мероприятия</Button></Menu.Item>
            <Menu.Item key="4"><Button onClick={() => router.push("/about")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>О Проекте</Button></Menu.Item>
            <Menu.Item key="5"><Button onClick={() => router.push("/language")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Рус</Button></Menu.Item>
            <Menu.Item key="6">
              <Button onClick={() => router.push("/login")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41'}}><UserOutlined style={{ color: "white" }}/></Button>
            </Menu.Item>
          </Menu>
        </nav>
      </header>

    </div>
  );
}
