"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function SwaggerPage() {
  return (
    <div className="h-screen w-full p-4 bg-gray-100">
      <SwaggerUI url="http://127.0.0.1:8000/swagger.json" />
    </div>
  );
}
