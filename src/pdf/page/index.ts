import jsPDF from "jspdf";

export function setPage(doc: jsPDF) {
  const page = doc.internal.pages.length - 1;

  doc.setPage(page);
  doc.setFontSize(10);
  doc.text(
    `Página ${page}`,
    doc.internal.pageSize.width - 50,
    doc.internal.pageSize.height - 10
  );
}
