import jsPDF from "jspdf";
import { setPage } from "../page";
import { autoPagination } from "../autoPagination";

export function setObs(doc: jsPDF, desc: string) {
  let startY = (doc as any).autoTable.previous.finalY + 20;

  // const hasNewPage = autoPagination(doc);

  // if (hasNewPage) {
  //   startY = 90;
  // }

  doc
    .setTextColor("red")
    .setFontSize(18)
    .setFillColor("red")
    .rect(0, startY - 3.5, 357, 1, "F")
    .text("Observações", 435, startY, { align: "right" });

  doc
    .setTextColor("black")
    .setFontSize(11)
    .setFont("", "normal")
    .text(desc, 15, startY + 15, {
      align: "left",
      maxWidth: 420,
      lineHeightFactor: 1.2,
    });
}
