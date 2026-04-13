import { Component, HostListener } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterLinkActive,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled=false
  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.isScrolled = window.scrollY > 100
  }

}
