"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser, RegisterData } from "../api/api";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState<RegisterData>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    password2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password !== form.password2) {
      alert("Пароли не совпадают!");
      return;
    }

    try {
      await registerUser(form);
      alert("Регистрация успешна!");
      router.push("/"); // Перенаправляем на страницу входа
    } catch {
      alert("Ошибка регистрации");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Регистрация</h2>
      <form onSubmit={handleSubmit} className="w-80 space-y-3">
        <input type="text" name="first_name" placeholder="Имя" onChange={handleChange} className="border p-2 w-full"/>
        <input type="text" name="last_name" placeholder="Фамилия" onChange={handleChange} className="border p-2 w-full"/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full"/>
        <input type="text" name="phone_number" placeholder="Телефон" onChange={handleChange} className="border p-2 w-full"/>
        <input type="password" name="password" placeholder="Пароль" onChange={handleChange} className="border p-2 w-full"/>
        <input type="password" name="password2" placeholder="Повторите пароль" onChange={handleChange} className="border p-2 w-full"/>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Зарегистрироваться</button>
      </form>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Button, Menu, Input } from "antd";
// import { useRouter } from "next/navigation";
// import { UserOutlined } from "@ant-design/icons";
// import { registerUser } from "../api/api"; 

// export default function Register() {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (form.password !== form.confirmPassword) {
//       alert("Пароли не совпадают");
//       return;
//     }
//     const response = await registerUser(form);
//     if (response.success) {
//       router.push("/login");
//     } else {
//       alert("Ошибка регистрации");
//     }
//   };

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

//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1C5A41] p-8 rounded-lg shadow-lg w-[500px] text-center z-10">
//         <h2 className="text-white text-2xl mb-4">Зарегистрироваться</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <Input className="mb-4" placeholder="Имя" name="firstName" onChange={handleChange} />
//           <Input className="mb-4" placeholder="Фамилия" name="lastName" onChange={handleChange} />
//           <Input className="mb-4 col-span-2" placeholder="Номер телефона" name="phone" onChange={handleChange} />
//           <Input className="mb-4 col-span-2" placeholder="Почта" name="email" onChange={handleChange} />
//           <Input.Password className="mb-4 col-span-2" placeholder="Пароль" name="password" onChange={handleChange} />
//           <Input.Password className="mb-4 col-span-2" placeholder="Повторите пароль" name="confirmPassword" onChange={handleChange} />
//         </div>
//         <div className="flex justify-between">
//           <Button className="bg-black text-white" onClick={() => router.push("/login")}>Вход</Button>
//           <Button onClick={handleSubmit} className="bg-gray-300">Регистрация</Button>
//         </div>
//       </div>
//     </div>
//   );
// }


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

//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1C5A41] p-8 rounded-lg shadow-lg w-[500px] text-center z-10">
//         <h2 className="text-white text-2xl mb-4">Зарегистрироваться</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <Input className="mb-4" placeholder="Имя" />
//           <Input className="mb-4" placeholder="Фамилия" />
//           <Input className="mb-4 col-span-2" placeholder="Номер телефона" />
//           <Input className="mb-4 col-span-2" placeholder="Почта" />
//           <Input.Password className="mb-4 col-span-2" placeholder="Пароль" />
//           <Input.Password className="mb-4 col-span-2" placeholder="Повторите пароль" />
//         </div>
//         <div className="flex justify-between">
//           <Button className="bg-black text-white" onClick={() => router.push("/login")}>Вход</Button>
//           <Button onClick={() => router.push("/profile")} className="bg-gray-300">Регистрация</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
