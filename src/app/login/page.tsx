"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Menu, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { login } from "../api/api";
import { Header } from "../components/sections/Header";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    const success = await login(email, password);
    if (success) {
      router.push("/profile");
    } else {
      setError("Неверные учетные данные");
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/almaty_bg3.jpg')" }}>
      <Header/>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1C5A41] p-8 rounded-lg shadow-lg w-[400px] text-center z-10">
        <h2 className="text-white text-2xl mb-4">Войти в аккаунт</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Input className="mb-4" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input.Password className="mb-4" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="flex justify-between">
          <Button className="bg-gray text-[#0A0F0C] px-4 py-2 rounded border-[#0A0F0C]" onClick={() => router.push("/register")}>Регистрация</Button>
          <Button onClick={handleLogin} className="bg-[#0A0F0C] text-white px-4 py-2 rounded border-[#0A0F0C] border-2">Вход</Button>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Button, Menu, Input } from "antd";
// import { useRouter } from "next/navigation";
// import { UserOutlined } from "@ant-design/icons";

// export default function Profile() {
//   const router = useRouter();

//   return (
//     <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/almaty_bg3.jpg')" }}>
//       <header className="absolute top-0 left-0 w-full bg-[#0A0F0C] py-4 z-10">
//         <nav className="container mx-auto flex justify-between items-center px-8">
//           <button onClick={() => router.push("/")}> 
//             <Image src="/images/logo.jpg" alt="Sayahat.AI Logo" width={150} height={50} className="h-auto" />
//           </button>
//           <Menu mode="horizontal" theme="dark" className="bg-[#0A0F0C]">
//             <Menu.Item key="1"><Button onClick={() => router.push("/routes")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Маршруты</Button></Menu.Item>
//             <Menu.Item key="2"><Button onClick={() => router.push("/locations")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Локации</Button></Menu.Item>
//             <Menu.Item key="3"><Button onClick={() => router.push("/events")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Мероприятия</Button></Menu.Item>
//             <Menu.Item key="4"><Button onClick={() => router.push("/about")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>О Проекте</Button></Menu.Item>
//             <Menu.Item key="5"><Button onClick={() => router.push("/language")} style={{ backgroundColor: '#1C5A41', borderColor: '#1C5A41', color: 'white' }}>Рус</Button></Menu.Item>
//             <Menu.Item key="6">
//               <Button onClick={() => router.push("/login")} style={{ backgroundColor: '#153A29', borderColor: '#1C5A41'}}><UserOutlined style={{ color: "white" }}/></Button>
//             </Menu.Item>
//           </Menu>
//         </nav>
//       </header>

//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1C5A41] p-8 rounded-lg shadow-lg w-[400px] text-center z-10">
//         <h2 className="text-white text-2xl mb-4">Войти в аккаунт</h2>
//         <Input className="mb-4" placeholder="Почта" />
//         <Input.Password className="mb-4" placeholder="Пароль" />
//         <div className="flex justify-between">
//           <Button className="bg-gray-300" onClick={() => router.push("/register")}>Регистрация</Button>
//           <Button onClick={() => router.push("/profile")} className="bg-black text-white">Вход</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
