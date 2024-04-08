import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function setClient(doc: jsPDF) {
  autoTable(doc, {
    body: [
      [
        "Vendedor: João Vendedor",
        "E-mail: email@example.com",
        "Telefone: (11) 99999-9999",
      ],
      ["A/C: João Responsável"],
    ],
    startY: 60,
    theme: "plain",
    tableWidth: "auto",
    tableLineColor: 200,
    bodyStyles: {
      cellWidth: "wrap",
      fillColor: [255, 255, 255],
      textColor: [0, 0, 0],
      fontStyle: "bold",
    },
    margin: { horizontal: 10 },
  });
}
