import { Component } from '@angular/core';
import { ServicsIconService } from '../../core/servics-icon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
data:any[]=[]
constructor(private ServersData:ServicsIconService){
  this.data=this.ServersData.getPortfolioData()
}
}
