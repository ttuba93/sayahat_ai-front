import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 backdrop-blur-sm z-30 bg-[#0A0F0C] py-4">
      <div className="container mx-auto flex justify-between items-center px-8">
        <button onClick={() => router.push("/")}> 
          <Image src="/images/logo.jpg" alt="Sayahat.AI Logo" width={150} height={50} className="h-auto" />
        </button>
        <Menu mode="horizontal" theme="dark" className="bg-[#0A0F0C]">
          <Menu.Item key="1">
            <Button onClick={() => router.push("/routes")} className="bg-[#1C5A41] border-[#1C5A41] text-white">
              Маршруты
            </Button>
          </Menu.Item>
          <Menu.Item key="2">
            <Button onClick={() => router.push("/locations")} className="bg-[#1C5A41] border-[#1C5A41] text-white">
              Локации
            </Button>
          </Menu.Item>
          <Menu.Item key="3">
            <Button onClick={() => router.push("/events")} className="bg-[#1C5A41] border-[#1C5A41] text-white">
              Мероприятия
            </Button>
          </Menu.Item>
          <Menu.Item key="4">
            <Button onClick={() => router.push("/about")} className="bg-[#1C5A41] border-[#1C5A41] text-white">
              О Проекте
            </Button>
          </Menu.Item>
          <Menu.Item key="5">
            <Button onClick={() => router.push("/language")} className="bg-[#1C5A41] border-[#1C5A41] text-white">
              Рус
            </Button>
          </Menu.Item>
          <Menu.Item key="6">
            <Button onClick={() => router.push("/login")} className="bg-[#1C5A41] border-[#1C5A41]">
              <UserOutlined className="text-white" />
            </Button>
          </Menu.Item>
        </Menu>
      </div>
    </header>
  );
};
