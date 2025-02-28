"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Menu } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { Header } from "../components/sections/Header";

export default function About() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/almaty_bg.jpg')" }}>
      
      <Header/>

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
