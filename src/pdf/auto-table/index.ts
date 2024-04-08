import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { autoPagination } from "../autoPagination";
import { setHeader } from "../header";

type Item = {
  title: string;
  items: {
    code: number;
    name: string;
    unit: string;
    quantity: number;
    value: string;
  }[];
};

export function customAutoTable(doc: jsPDF, title: string, data: Item[]) {
  let startY = ((doc as any).autoTable.previous.finalY += 20);
  let startWRect = 105;

  if (title !== "Equipamentos") {
    startWRect = 70;
  }

  const hasNewPage = autoPagination(doc);

  if (hasNewPage) {
    startY = 90;
  }

  doc
    .setTextColor("red")
    .setFontSize(18)
    .setFillColor("red")
    .rect(startWRect, startY - 3.5, 570, 1, "F")
    .text(title, 15, startY);

  doc.setTextColor(0, 0, 0).setFontSize(12);

  data.forEach((group) => {
    startY = (doc as any).autoTable.previous.finalY += 10;

    doc.text(`Grupo: ${group.title}`, 15, startY + 5);

    autoTable(doc, {
      head: [["Cód.:", "Nome:", "Unid:", "Quant:", "Valor:"]],
      body: group.items.map((item) => [
        item.code,
        item.name,
        item.unit,
        item.quantity,
        item.value,
      ]),
      theme: "plain",
      tableWidth: "auto",
      showHead: "everyPage",
      showFoot: "never",
      tableLineColor: 200,
      tableLineWidth: 0,
      startY: startY + 10,
      styles: {
        lineColor: 200,
        lineWidth: 0,
      },
      headStyles: {
        fillColor: [240, 240, 240],
        textColor: [0, 0, 0],
        fontStyle: "bold",
        lineColor: 200,
        halign: "left",
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        lineColor: 200,
        halign: "left",
        cellPadding: { vertical: 2, horizontal: 5 },
      },
      margin: { left: 15, right: 10, vertical: 80 },
      // caso quebre a página chame a função setHeader
    });
  });
}
