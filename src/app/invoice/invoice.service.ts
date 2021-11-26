import { InvoiceModel } from "./invoice.model";

export class InvoiceService {
    private lstInvoice: InvoiceModel[] = [
        { id: 1, invoiceNumber: 'Inv_01', amount: 5000, date: new Date() },
        { id: 2, invoiceNumber: 'Inv_02', amount: 10000, date: new Date() }];

    getAll(): InvoiceModel[] {
        return this.lstInvoice;
    }
    getById(id: number) {
        let index = this.lstInvoice.findIndex(x => x.id == id);
        return this.lstInvoice[index];
    }
}