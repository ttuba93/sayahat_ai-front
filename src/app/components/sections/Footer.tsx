import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button, Menu } from "antd";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";

export const Footer = () => {
    return (
      <footer className="bg-[#0A0F0C] text-gray-400 text-sm py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Логотип и описание */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/logo.jpg" alt="Sayahat.AI Logo" width={150} height={50} className="h-auto" />
            <p className="mt-4 text-gray-400 leading-6">Умные маршруты и удобное планирование</p>
            <p className="mt-4 text-[#1C5A41] font-semibold hover:underline cursor-pointer">
              <a href="#hero">Узнать больше</a>
            </p>
          </div>
  
          {/* Навигация */}
          <nav>
            <h4 className="text-white text-lg font-semibold mb-4 border-b pb-2 border-[#153A29]">
              Навигация
            </h4>
            <ul className="space-y-3">
                <li><Link href="/about" className="hover:text-[#1C5A41] transition duration-300">О нас</Link></li>
                <li><Link href="/routes" className="hover:text-[#1C5A41] transition duration-300">Маршруты</Link></li>
                <li><Link href="/locations" className="hover:text-[#1C5A41] transition duration-300">Локации</Link></li>
                <li><Link href="/events" className="hover:text-[#1C5A41] transition duration-300">Мероприятия</Link></li>
                <li><Link href="/contacts" className="hover:text-[#1C5A41] transition duration-300">Контакты</Link></li>
            </ul>
          </nav>
  
          {/* Контакты */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 border-b pb-2 border-[#153A29]">Контакты</h4>
            <p className="text-gray-400 leading-6"><span className="font-semibold">Адрес:</span> г. Алматы, ул. Абая, 90</p>
            <p className="text-gray-400 mt-4">
              <span className="font-semibold">Email:</span>
              <a href="mailto:info@example.com" className="hover:text-[#1C5A41] transition duration-300"> info@example.com</a>
            </p>
          </div>
  
          {/* Социальные сети */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 border-b pb-2 border-[#153A29]">Мы в соцсетях</h4>
            <div className="flex justify-center md:justify-start gap-6">
                <a href="#" className="hover:text-[#1C5A41] transition duration-300"><FacebookOutlined className="text-2xl" /></a>
                <a href="#" className="hover:text-[#1C5A41] transition duration-300"><InstagramOutlined className="text-2xl" /></a>
                <a href="#" className="hover:text-[#1C5A41] transition duration-300"><LinkedinOutlined className="text-2xl" /></a>
                <a href="#" className="hover:text-[#1C5A41] transition duration-300"><YoutubeOutlined className="text-2xl" /></a>
            </div>
          </div>
        </div>
        {/* Нижний колонтитул */}
        <div className="border-t border-[#153A29] mt-8 pt-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Все права защищены.
        </div>
      </footer>
    );
  };
  