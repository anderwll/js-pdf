import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { autoPagination } from "../autoPagination";

export function setTotal(doc: jsPDF) {
  let startY = (doc as any).autoTable.previous.finalY + 20;

  const hasNewPage = autoPagination(doc);

  if (hasNewPage) {
    startY = 90;
  }

  doc
    .setTextColor("red")
    .setFontSize(18)
    .setFillColor("red")
    .rect(0, startY - 3.5, 400, 1, "F")
    .text("Total", 435, startY, { align: "right" });

  autoTable(doc, {
    body: [
      ["Subtotal: R$ 432,00", "Desconto: R$ 432,00"],
      ["Logística: R$ 432,00"],
    ],
    foot: [
      ["", "Total: R$ 432,00"],
      ["", "Forma de pagamento: Boleto"],
    ],
    theme: "plain",
    tableWidth: "auto",
    showHead: "never",
    showFoot: "everyPage",
    tableLineColor: 200,
    tableLineWidth: 0,
    startY: startY,
    styles: {
      lineColor: 200,
      lineWidth: 0,
      fontStyle: "bold",
    },
    bodyStyles: {
      halign: "left",
    },
    footStyles: {
      halign: "right",
      valign: "bottom",
      cellWidth: "wrap",
      fontSize: 11,
    },
    margin: { right: 15, left: 10, vertical: 80 },
  });
}
