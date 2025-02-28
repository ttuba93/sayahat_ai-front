"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Menu } from "antd";
import { useRouter } from "next/navigation";
import { UserOutlined, CaretLeftOutlined, CaretRightOutlined, EnvironmentOutlined, CarOutlined, CloudOutlined, AppstoreOutlined, TeamOutlined, LineChartOutlined } from "@ant-design/icons";
import { Row, Col, Card } from "antd";
import PowerBIReport from "./components/sections/PowerBIReport";
import {Header} from "./components/sections/Header";
import SliderSection from "./components/sections/SliderSection";
import { Footer } from "./components/sections/Footer";
import CardService from "./components/sections/CardService";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-white">
      <Header/>
      <SliderSection/>
      <CardService/>
      <PowerBIReport />
      <Footer/>
    </div>
  );
}
