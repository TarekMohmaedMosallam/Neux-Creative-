import { Component } from '@angular/core';
import { ServicsIconService } from '../../core/servics-icon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
data :any[]=[]
constructor(private service:ServicsIconService){
  this.data=this.service.getDataOfClient()
}
}
