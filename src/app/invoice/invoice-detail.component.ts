import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InvoiceModel } from "./invoice.model";
import { InvoiceService } from "./invoice.service";

@Component({
    selector: 'invoice-detail',
    templateUrl: './invoice-detail.component.html'
})
export class InvoiceDetailComponent implements OnInit {

    invoiceModel = new InvoiceModel();
    constructor(private activatedRoute: ActivatedRoute, private invoiceService: InvoiceService) {

    }
    ngOnInit(): void {
        let id: number = + this.activatedRoute.snapshot.paramMap.get('id');
        this.invoiceModel = this.invoiceService.getById(id);
    }
}