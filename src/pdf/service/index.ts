import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function setService(doc: jsPDF) {
  doc
    .setTextColor("red")
    .setFontSize(18)
    .setFillColor("red")
    .rect(120, (doc as any).autoTable.previous.finalY + 17, 570, 1, "F")
    .text("Dados do serviço", 15, (doc as any).autoTable.previous.finalY + 20);

  autoTable(doc, {
    body: [
      [
        "Cliente: Maria de La Bairro",
        "E-mail: maria@email.com",
        "Telefone: (11) 99999-9999",
      ],
      ["Evento: Casamento", "Tipo: Cerimônia", "Grupo: Música ao vivo aaa"],
      ["Nome Local: Igreja Nossa", "Endereço: Rua dos Bobos, 0"],
    ],
    startY: (doc as any).autoTable.previous.finalY + 30,
    theme: "plain",
    tableWidth: "auto",
    showHead: "never",
    showFoot: "everyPage",
    tableLineColor: 200,
    tableLineWidth: 0,
    styles: {
      lineColor: 200,
      lineWidth: 0,
      fontStyle: "bold",
    },
    bodyStyles: {
      cellWidth: "wrap",
      fillColor: [255, 255, 255],
      textColor: [0, 0, 0],
    },
    margin: { horizontal: 10 },
  });
}
