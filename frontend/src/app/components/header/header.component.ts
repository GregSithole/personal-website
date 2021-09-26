import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadResume(): void {
    window.open('/assets/resume/resume.pdf', '_blank');
  }

  scrollToSection(id: string): void {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
