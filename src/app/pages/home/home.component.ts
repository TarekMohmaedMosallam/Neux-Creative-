import { routes } from "./../../app.routes";
import { Component, inject } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ServicsIconService } from "../../core/servics-icon.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  routes = inject(Router);
  data1: any = [];
  data2: any[] = [];
  data3: any[] = [];
  constructor(private servicesData: ServicsIconService) {
    this.data1 = this.servicesData.getService();
    this.data2 = this.servicesData.getPortfolioData();
    this.data3 = this.servicesData.getDataOfClient();
  }
  NavigatePage(string: string) {
    this.routes.navigate([string]);
  }
}
