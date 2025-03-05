import React from "react";

const PowerBIReport = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px", padding: "20px" }}>
      <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "20px", textAlign: "center", color: "#0A0F0C" }}>Карта города</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          title="SAYAKHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATT"
          width="1140" 
          height="640" 
          src="https://app.powerbi.com/reportEmbed?reportId=1d4a33d6-9ddb-4b2e-bb36-2e5304899392&autoAuth=true&ctid=57081b5e-e66a-4993-8eaf-15b0b309293f"          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PowerBIReport;
