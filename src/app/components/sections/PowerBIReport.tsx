import React from "react";

const PowerBIReport = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px", padding: "20px" }}>
      <h2>Отчет Power BI</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          title="sayakhaaaaaaaaaat"
          width="800" 
          height="450" 
          src="https://app.powerbi.com/reportEmbed?reportId=2f033262-86a0-4007-b888-7239afa37f59&autoAuth=true&ctid=57081b5e-e66a-4993-8eaf-15b0b309293f"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PowerBIReport;
