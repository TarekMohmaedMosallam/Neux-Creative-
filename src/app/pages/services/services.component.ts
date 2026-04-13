import { Component } from '@angular/core';
import { ServicsIconService } from '../../core/servics-icon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  data: any = [];
 constructor(private servicesData:ServicsIconService){
    this.data = this.servicesData.getService();
 }
}
