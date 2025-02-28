"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Menu, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { registerUser, RegisterData } from "../api/api";
import { Header } from "../components/sections/Header";

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
      router.push("/");
      router.push("/profile");
    } catch {
      alert("Ошибка регистрации");
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/almaty_bg3.jpg')" }}>
      <Header/>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1C5A41] p-8 rounded-lg shadow-lg w-[500px] text-center z-10">
        <h2 className="text-white text-2xl mb-4">Зарегистрироваться</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex space-x-2">
            <Input type="text" name="first_name" placeholder="Имя" onChange={handleChange}/>
            <Input type="text" name="last_name" placeholder="Фамилия" onChange={handleChange}/>
          </div>
          <div className="flex space-x-2">
            <Input type="email" name="email" placeholder="Email" onChange={handleChange}/>
            <Input type="text" name="phone_number" placeholder="Телефон" onChange={handleChange}/>
          </div>
          <Input.Password type="password" name="password" placeholder="Пароль" onChange={handleChange}/>
          <Input.Password type="password" name="password2" placeholder="Повторите пароль" onChange={handleChange}/>
          <div className="flex justify-between">
            <Button type="default" className="bg-gray text-[#0A0F0C] px-4 py-2 rounded border-[#0A0F0C]" onClick={() => router.push("/login")}>Вход</Button>
            <Button type="primary" htmlType="submit" className="bg-[#0A0F0C] px-4 py-2 rounded border-[#0A0F0C]">Регистрация</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
