import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { InvoiceDetailComponent } from "./invoice-detail.component";
import { InvoiceComponent } from "./invoice.component";
import { InvoiceService } from "./invoice.service";

const routes: Route[] = [
    {
        path: ':id',
        component: InvoiceDetailComponent
    },
    {
        path: '',
        component: InvoiceComponent
    }
]

@NgModule({
    declarations: [InvoiceComponent, InvoiceDetailComponent],
    imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
    providers: [InvoiceService],
    bootstrap: []
})

export class InvoiceModule {

}