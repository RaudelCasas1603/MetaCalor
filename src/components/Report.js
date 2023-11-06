import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './styles/ReportStyle.css'

export default function Report() {

    const [reportData, setReportData] = useState([
        { fecha: "05/11/2023", carbohidratos: 100, proteinas: 100, grasas: 100, estado: "completado" },
        { fecha: "06/11/2023", carbohidratos: 100, proteinas: 90 , grasas: 100, estado: "completado"},
        { fecha: "07/11/2023", carbohidratos: 100, proteinas: 80 , grasas: 100, estado: "completado"},
        { fecha: "08/11/2023", carbohidratos: 100, proteinas: 70 , grasas: 100, estado: "completado"},
        { fecha: "09/11/2023", carbohidratos: 100, proteinas: 60 , grasas: 100, estado: "completado"},
        { fecha: "10/11/2023", carbohidratos: 100, proteinas: 50 , grasas: 100, estado: "completado"},
        { fecha: "11/11/2023", carbohidratos: 100, proteinas: 40 , grasas: 100, estado: "completado"},
        // Agrega más datos aquí
    ]);

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text('Reporte', 10, 10);
        doc.autoTable({
          head: [
            ['Fecha', 'Carbohidratos', 'Proteinas', 'Grasas', 'Estatus'],
          ],
          body: reportData.map(data => [data.fecha, data.carbohidratos, data.proteinas, data.grasas, data.estado]),
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
                <th>Carbohidratos</th>
                <th>Proteinas</th>
                <th>Grasas</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((data, index) => (
                <tr key={index}>
                  <td>{data.fecha}</td>
                  <td>{data.carbohidratos}</td>
                  <td>{data.proteinas}</td>
                  <td>{data.grasas}</td>
                  <td>{data.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-container">
          <button className="pdf-button" onClick={generatePDF}>Generar PDF</button>

          </div>
        </section>
      </main>
    </div>

    );
}