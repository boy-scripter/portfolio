import { Component, signal, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { profile } from '../data/portfolio.data';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         [ngClass]="scrolled() ? 'bg-white/85 backdrop-blur-xl shadow-sm py-4' : 'py-6'">
      <div class="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
        <a href="#hero" class="flex items-center gap-3 font-bold font-display text-lg text-slate-900">
          <span class="w-9 h-9 flex items-center justify-center bg-primary-600 text-white rounded-lg text-sm font-bold">SG</span>
          {{ profile.name }}
        </a>

        <button class="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50 relative"
                (click)="menuOpen.set(!menuOpen())" aria-label="Toggle menu">
          <span class="block w-6 h-0.5 bg-slate-800 transition-all duration-300"
                [ngClass]="menuOpen() ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-6 h-0.5 bg-slate-800 transition-all duration-300"
                [ngClass]="menuOpen() ? 'opacity-0' : ''"></span>
          <span class="block w-6 h-0.5 bg-slate-800 transition-all duration-300"
                [ngClass]="menuOpen() ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>

        <ul class="flex items-center gap-8 list-none"
            [ngClass]="isMobile()
              ? 'fixed top-0 right-0 bottom-0 w-72 bg-white flex-col items-start gap-5 p-20 px-6 shadow-xl transition-transform duration-300'
              : ''"
            [style.transform]="isMobile() ? (menuOpen() ? 'translateX(0)' : 'translateX(100%)') : null">
          @for (link of links; track link.id) {
            <li>
              <a [href]="'#' + link.id"
                 (click)="menuOpen.set(false)"
                 class="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors relative py-2"
                 [ngClass]="activeSection() === link.id ? 'text-primary-600' : ''">
                {{ link.label }}
              </a>
            </li>
          }
          <li>
            <a href="#contact" (click)="menuOpen.set(false)"
               class="bg-primary-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-primary-700 hover:-translate-y-0.5 transition-all">
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class NavComponent {
  profile = profile;
  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('hero');
  isMobile = signal(false);

  links = [
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  constructor() {
    this.checkViewport();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkViewport();
  }

  checkViewport(): void {
    this.isMobile.set(window.innerWidth <= 768);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);

    const sections = ['hero', 'education', 'skills', 'experience', 'projects', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          this.activeSection.set(id);
          break;
        }
      }
    }
  }
}
