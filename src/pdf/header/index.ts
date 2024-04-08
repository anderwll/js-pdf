import jsPDF from "jspdf";
import fs, { readFileSync } from "fs";

const path = `${__dirname}/logo.jpg`;
const data = fs.readFileSync(path);
const arrBuffer = data.buffer.slice(
  data.byteOffset,
  data.byteOffset + data.byteLength
);
const byteArray = new Uint8Array(arrBuffer);

export function setHeader(doc: jsPDF) {
  const height = 20;

  doc.setFont("times", "normal");

  doc.addImage(byteArray, "PNG", 10, 5, 100, 20);

  doc
    .setFontSize(8)
    .setFont("times", "italic", "bold")
    .setTextColor("#a9a9a9")
    .text(
      "CRIANDO EMOÇÕES & MOMENTOS",
      60,
      height + 15,
      { align: "center" },
      0
    );

  doc.setFontSize(11).setFont("times", "bold").setTextColor("#000000");
  doc.text("Emissão: 23/04/24", 435, height - 2, { align: "right" });
  doc.text("Validade: 23/04/24", 435, height + 10, { align: "right" });

  doc
    .setFillColor("red")
    .rect(0, height + 20, 460, 15, "F")
    .setFontSize(12)
    .setTextColor("white")
    .text("ORÇAMENTO 0000000345-24", 435, height + 30, { align: "right" });
}
