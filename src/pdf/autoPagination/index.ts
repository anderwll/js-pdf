import jsPDF from "jspdf";
import { setPage } from "../page";
import { setHeader } from "../header";

const HEIGHT_A4 = 520;
export function autoPagination(doc: jsPDF) {
  let startY = (doc as any).autoTable.previous.finalY + 20;

  console.log(startY);

  if (startY + 50 > HEIGHT_A4) {
    doc.addPage();
    setHeader(doc);
    setPage(doc);
    return true;
  }

  return false;
}
