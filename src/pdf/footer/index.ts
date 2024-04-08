import jsPDF from "jspdf";
import fs, { readFileSync } from "fs";

const path = `${__dirname}/logo.jpg`;
const data = fs.readFileSync(path);
const arrBuffer = data.buffer.slice(
  data.byteOffset,
  data.byteOffset + data.byteLength
);
const byteArray = new Uint8Array(arrBuffer);

export function setFooter(doc: jsPDF) {
  const startY = doc.internal.pageSize.height - 50;

  doc.setFillColor("red").rect(0, startY, 460, 5, "F");

  doc.setFontSize(11).setFont("times", "bold").setTextColor("#000000");
  doc.text("PLUGSOM - CNPJ 11.111.666/0001-30", 15, startY + 20, {
    align: "left",
  });
  doc.text("Av. Brasil 717 - Gravataí RS CEP 95000-000", 15, startY + 30, {
    align: "left",
  });
  doc.text("Fone: +55 51 3488 3075", 15, startY + 40, {
    align: "left",
  });

  doc
    .rect(190, startY + 10, 80, 35)
    .text("QR Code", 230, startY + 30, { align: "center" });

  doc.addImage(byteArray, "PNG", 310, startY + 10, 125, 35);
}
