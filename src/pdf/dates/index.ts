import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function setDates(doc: jsPDF) {
  const startY = (doc as any).autoTable.previous.finalY + 20;

  doc
    .setTextColor("#00000")
    .setFontSize(10)
    .setTextColor("red")
    .text("CALENDÁRIO DO EVENTO", 15, startY, {
      align: "left",
    });

  autoTable(doc, {
    head: [["Datas Evento:", "Datas Montagem:", "Datas Desmontagem:"]],
    body: [["23/04/24 12:35", "23/04/24 12:35", "23/04/24 12:35"]],
    startY: startY + 5,
    theme: "plain",
    tableWidth: "auto",
    showHead: "everyPage",
    showFoot: "everyPage",
    tableLineColor: 200,
    tableLineWidth: 0,
    styles: {
      lineColor: 200,
      lineWidth: 0,
    },
    headStyles: {
      fillColor: [255, 255, 255],
      textColor: [255, 0, 0],
      fontStyle: "bold",
      lineColor: 200,
      halign: "center",
      valign: "bottom",
      fontSize: 10,
    },
    bodyStyles: {
      fillColor: [255, 255, 255],
      textColor: [0, 0, 0],
      halign: "center",
      fontSize: 9,
      cellPadding: { vertical: 2 },
    },
    margin: { horizontal: 10 },
  });

  doc.setFontSize(10);
}
