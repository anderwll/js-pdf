import jsPDF from "jspdf";

const PAGE_HEIGHT = 297;

export function addcontentWithPagination(
  doc: jsPDF,
  contentFunction: ((doc: jsPDF, yOffset: number) => any)[]
) {
  let yOffset = 0;
  let remainingContentHeight = PAGE_HEIGHT;

  contentFunction.forEach((fnc) => {
    // Obtém a altura do item
    const itemHeight = (doc as any).autoTable.previous.finalY;

    // Verifica se o item se encaixa na página atual
    if (itemHeight <= remainingContentHeight) {
      // Adiciona o item à página atual

      fnc(doc, yOffset);

      yOffset += itemHeight;
      remainingContentHeight -= itemHeight;
    } else {
      // Adiciona nova página
      doc.addPage();
      yOffset = 0;
      remainingContentHeight = PAGE_HEIGHT;
    }
  });
}
