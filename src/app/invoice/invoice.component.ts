import { Component, OnInit } from "@angular/core";
import { InvoiceModel } from "./invoice.model";
import { InvoiceService } from "./invoice.service";

@Component({
    selector: 'invoice',
    templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {
    lstInvoice: InvoiceModel[];
    constructor(private invoiceService: InvoiceService) {

    }
    ngOnInit(): void {
        this.lstInvoice = this.invoiceService.getAll();
    }
}