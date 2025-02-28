import React from "react";
import { Card, Row, Col } from "antd";
import { EnvironmentOutlined, CarOutlined, GlobalOutlined, AppstoreOutlined, TeamOutlined, LineChartOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const cardData = [
  { title: "Карта города", description: "Сбор и анализ данных о городе для выявления проблем.", icon: <EnvironmentOutlined /> },
  { title: "Мониторинг транспорта", description: "Мониторинг транспорта и транзакций.", icon: <CarOutlined /> },
  { title: "Экология", description: "Мониторинг экологического состояния города.", icon: <GlobalOutlined /> },
  { title: "Городские сервисы", description: "Оптимизация и автоматизация услуг для городской инфраструктуры.", icon: <AppstoreOutlined /> },
  { title: "Социальная сфера", description: "Поддержка и развитие социальных услуг.", icon: <TeamOutlined /> },
  { title: "Экономика", description: "Анализ экономических показателей.", icon: <LineChartOutlined /> }
];

const ServicesCards = () => {
  return (
    <div className="p-8 bg-black">
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
