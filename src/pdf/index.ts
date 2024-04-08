import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { setHeader } from "./header";
import { setPage } from "./page";
import { setClient } from "./client";
import { setService } from "./service";

import { customAutoTable } from "./auto-table";
import { mockEquipment, mockObs, mockServices } from "./mocks/infos-budget";
import { setTotal } from "./total";
import { setObs } from "./obs";
import { setDates } from "./dates";
import { setFooter } from "./footer";
import { setSignature } from "./signature";

/// ---- PDF INITIAL -----
export const doc = new jsPDF("p", "px", "a4");

setHeader(doc);
setPage(doc);
setFooter(doc);

// ---- CLIENTE
setClient(doc);

// ---- SERVIÇO
setService(doc);

// ---- DATAS
setDates(doc);

// GROUPS
customAutoTable(doc, "Equipamentos", mockEquipment);

customAutoTable(doc, "Serviços", mockServices);

// TOTAL
setTotal(doc);

// OBS
setObs(doc, mockObs);

// SIGNATURE
setSignature(doc);
