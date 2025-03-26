import React from "react";
import { Card, Row, Col } from "antd";
import { EnvironmentOutlined, CarOutlined, GlobalOutlined, AppstoreOutlined, TeamOutlined, LineChartOutlined, CalendarOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const cardData = [
  { title: "Локации", description: "Карта с туристическими объектами и популярними местами для посещения.", icon: <EnvironmentOutlined /> },
  { title: "Маршруты", description: "Популярные маршруты среди туристов в Алмате.", icon: <CarOutlined /> },
  { title: "Мероприятия", description: "Актуальные мероприятия по городу.", icon: <CalendarOutlined /> },
];

const ServicesCards = () => {
  return (
    <div className="p-8 bg-white">
      <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "20px", textAlign: "center", color: "#0A0F0C" }}>Наши сервисы</h1>
      <Row gutter={[16, 16]} justify="center">
        {cardData.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className="transition-transform transform hover:scale-105 hover:bg-green-700 bg-[#153A29] text-white border-none shadow-lg"
              style={{ minHeight: 180, borderRadius: "12px", textAlign: "center" }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesCards;
