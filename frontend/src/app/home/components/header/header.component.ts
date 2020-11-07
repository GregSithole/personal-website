import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggled: boolean;
  toggleButton: boolean;

  constructor() {
    this.toggled = false;
    this.toggleButton = false;
  }

  ngOnInit(): void {
    this.addDarkModeSelector();
    this.watchDarkMode();
  }

  scrollToSection(section: string): void {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  checkDarkMode(): boolean {
    return !document.documentElement.classList.contains('dark-mode');
  }

  watchDarkMode(): void {
    if (!window.matchMedia) {
      return;
    }
    window.matchMedia('(prefers-color-scheme: dark)').addListener(this.addDarkModeSelector);
  }

  addDarkModeSelector(): void {
    if (this.checkDarkMode()) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }

}
