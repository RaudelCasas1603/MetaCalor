import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './styles/ReportStyle.css'
import axios from 'axios';
import {useAuth } from "../AuthContext";

export default function Report() {
  const [reportData, setReportData] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    console.log("Fetching data for user ID: " + userId);
    obtenerDatosPerfil();
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  const obtenerDatosPerfil = async () => {
    try {
      console.log("Fetching data for user ID: " + userId);
      const respuesta = await axios.get('https://metacalor-e.000webhostapp.com/loadReport.php?id=' + userId);
      console.log("Response data:", respuesta.data);
      setReportData(respuesta.data);
      console.log("Report data:", reportData);
    } catch (error) {
      console.error('Error fetching profile data', error);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Set text properties
    doc.setTextColor(0, 0, 0); // Set text color to black
    doc.setFont('helvetica', 'bold'); // Set font family and style (bold)
    doc.setFontSize(14); // Set font size
  
    // Add centered title
    const title = 'Reporte General de Usuario';
    const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const titleX = (doc.internal.pageSize.width - titleWidth) / 2;
    doc.text(title, titleX, 10);
  
    // Reset font style for table content
    doc.setFont('helvetica', 'normal'); // Reset font style to normal
  
    // Add table
    doc.autoTable({
      head: [
        ['Fecha', 'Calorias', 'Proteinas', 'Grasas', 'Carbohidratos', 'Estatus'],
      ],
      body: reportData.map(data => [data.fecha, data.caloriasRegistradas, data.proteinasRegistradas, data.grasasRegistradas, data.carbohidratosRegistrados, data.estado]),
    });
  
    doc.save('reporte.pdf');
  };
  
  
  

  return (
    <div className="body">
      <main className="table">
        <section className="table__header">
          <h1>Reporte</h1>
        </section>
        <section className="table__content">
          <table className="center-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Calorias</th>
                <th>Proteina</th>
                <th>Grasas</th>
                <th>Carbohidratos</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(reportData) && reportData.length > 0 ? (
                reportData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.fecha}</td>
                    <td>{data.caloriasRegistradas}</td>
                    <td>{data.proteinasRegistradas}</td>
                    <td>{data.grasasRegistradas}</td>
                    <td>{data.carbohidratosRegistrados}</td>
                    <td>{data.estado}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="button-container">
            <button className="pdf-button" onClick={generatePDF}>
              Generar PDF
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}