import jsPDF from "jspdf";

export function setSignature(doc: jsPDF) {
  let startY = (doc as any).autoTable.previous.finalY + 65;

  doc.setFontSize(11).setFont("times", "normal").setTextColor("#000000");

  doc
    .rect(15, startY, 180, 1, "F")
    .text("Assinatura e carimbo responsável Plugsom", 28, startY + 10, {
      align: "left",
    });

  doc
    .rect(250, startY, 180, 1, "F")
    .text("Assinatura do contratante", 295, startY + 10, {
      align: "left",
    })
    .setFontSize(9)
    .text("Nome completo:", 250, startY + 20, {
      align: "left",
    })
    .text("CNPJ/CPF:", 250, startY + 30, {
      align: "left",
    });
}
