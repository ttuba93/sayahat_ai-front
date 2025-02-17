"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Menu } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined, CaretLeftOutlined, CaretRightOutlined} from "@ant-design/icons";

export default function Home() {
  const router = useRouter();

  const images = [
    "https://extraguide.ru/images/pthumb/blog/2021/04-22-8o5cm4-botanicheskiy-sad.cd9f7e96.jpg",
    "https://extraguide.ru/images/pthumb/blog/2022/11-05-pxgtmf-gora-kok-tobe.cd9f7e96.jpg",
    "https://extraguide.ru/images/pthumb/blog/2022/11-05-ylpto6-kanatnaya-doroga.cd9f7e96.jpg",
    "https://extraguide.ru/images/pthumb/blog/2022/11-01-v4feqo-poyushchiy-barhan.cd9f7e96.jpg",
    "https://extraguide.ru/images/pthumb/blog/2021/04-21-rlg8oy-muzey-kazahskih-narodnyh-muzykalnyh-instrumentov.cd9f7e96.jpg",
    "https://extraguide.ru/images/pthumb/blog/2022/11-01-p0fxi2-kolsayskie-ozera.cd9f7e96.jpg",
    "https://www.advantour.com/img/kazakhstan/almaty/zenkov-cathedral6.jpg",
    "https://extraguide.ru/images/pthumb/blog/2022/11-05-uiqehs-almatinskiy-terrenkur.cd9f7e96.jpg",
    "https://extraguide.ru/images/pthumb/blog/2021/04-21-y5f3rw-bolshoe-alma-atinskoe-ozero.cd9f7e96.jpg",
    "https://extraguide.ru/images/pthumb/blog/2022/11-05-hqtiyc-park-kultury-i-otdyha-im-gorkogo.cd9f7e96.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen bg-white">
      <div className="absolute top-0 left-0 w-full h-[83.33vh] bg-[#1C5A41] opacity-70 z-0"></div>
      
      <header className="absolute top-0 left-0 w-full bg-[#0A0F0C] py-4 z-10">
        <nav className="container mx-auto flex justify-between items-center px-8">
          <button onClick={() => router.push("/")}> 
            <Image src="/images/logo.jpg" alt="Sayahat.AI Logo" width={150} height={50} className="h-auto" />
          </button>
          <Menu mode="horizontal" theme="dark" className="bg-[#0A0F0C]">
            <Menu.Item key="1"><Button onClick={() => router.push("/routes")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Маршруты</Button></Menu.Item>
            <Menu.Item key="2"><Button onClick={() => router.push("/locations")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Локации</Button></Menu.Item>
            <Menu.Item key="3"><Button onClick={() => router.push("/events")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Мероприятия</Button></Menu.Item>
            <Menu.Item key="4"><Button onClick={() => router.push("/about")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>О Проекте</Button></Menu.Item>
            <Menu.Item key="5"><Button onClick={() => router.push("/language")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Рус</Button></Menu.Item>
            <Menu.Item key="6">
              <Button onClick={() => router.push("/login")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41'}}><UserOutlined style={{ color: "white" }}/></Button>
            </Menu.Item>
          </Menu>
        </nav>
      </header>

      <div className="absolute top-[45%] left-8 transform -translate-y-1/2 z-10">
        <h2 className="text-[#0A0F0C] text-5xl italic font-[Philosopher] color-[#0A0F0C]">Добро пожаловать в</h2>
        <h2 className="text-[#0A0F0C] text-7xl font-[Lobster] color-[#0A0F0C]">ALMATY</h2>
        <Button onClick={() => router.push("/routes")} style={{ backgroundColor: '#0A0F0C', borderColor: '#0A0F0C', color: 'white', padding: '24px 120px', fontSize: '1.25rem', fontWeight: 'bold'  }} size="large" className="mt-4">Выберите свой маршрут</Button>
      </div>

      <div className="absolute bottom-[155px] right-8 flex flex-col items-center z-10">
        <img src={images[currentIndex]} alt="slide" className="w-[850px] h-[350px] object-cover rounded-[50px] transition-opacity duration-500" />
        <div className="flex space-x-4 mt-4">
          <Button style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41' }} shape="circle" onClick={prevSlide} icon={<CaretLeftOutlined style={{ color: "white" }}/>}/>
          <Button style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41' }} shape="circle" onClick={nextSlide} icon={<CaretRightOutlined style={{ color: "white" }}/>}/>
        </div>
      </div>
    </div>
  );
}
