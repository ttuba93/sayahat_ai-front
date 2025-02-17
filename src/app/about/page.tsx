"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Menu } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";

export default function About() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/almaty_bg.jpg')" }}>
      
      <header className="absolute top-0 left-0 w-full bg-[#0A0F0C] py-4 z-10">
        <nav className="container mx-auto flex justify-between items-center px-8">
          <button onClick={() => router.push("/")}> 
            <Image src="/images/logo.jpg" alt="Sayahat.AI Logo" width={150} height={50} className="h-auto" />
          </button>
          <Menu mode="horizontal" theme="dark" className="bg-[#0A0F0C]">
            <Menu.Item key="1"><Button onClick={() => router.push("/routes")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Маршруты</Button></Menu.Item>
            <Menu.Item key="2"><Button onClick={() => router.push("/locations")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Локации</Button></Menu.Item>
            <Menu.Item key="3"><Button onClick={() => router.push("/events")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Мероприятия</Button></Menu.Item>
            <Menu.Item key="4"><Button onClick={() => router.push("/about")} style={{ backgroundColor: '#153A29', borderColor: '#1C5A41', color: 'white' }}>О Проекте</Button></Menu.Item>
            <Menu.Item key="5"><Button onClick={() => router.push("/language")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Рус</Button></Menu.Item>
            <Menu.Item key="6">
              <Button onClick={() => router.push("/login")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41'}}><UserOutlined style={{ color: "white" }}/></Button>
            </Menu.Item>
          </Menu>
        </nav>
      </header>

      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-2/3 bg-white bg-opacity-60 p-6 rounded-lg shadow-lg text-[#0A0F0C] text-center z-10">
        <h1 className="text-3xl font-bold mb-4">О Проекте</h1>
        <p className="text-lg mb-4">Добро пожаловать в портал для туристов Алматы</p>
        <h2 className="text-xl font-bold">Наша миссия</h2>
        <p className="mb-4">Мы стремимся повысить осведомленность и улучшить безопасность общества, предоставляя доступ к важной информации о преступлениях и их тенденциях.</p>
        <h2 className="text-xl font-bold">Что мы предлагаем</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Популярные туристические маршруты</li>
          <li>Локации для посещения в Алматы</li>
          <li>Ближайшие мероприятия</li>
        </ul>
        <h2 className="text-xl font-bold">Свяжитесь с нами</h2>
        <p className="font-bold">Если у вас есть вопросы или предложения, не стесняйтесь обращаться к нам по электронной почте: almaty.</p>
      </div>
    </div>
  );
}
