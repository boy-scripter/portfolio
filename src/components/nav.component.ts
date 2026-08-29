import { Component, signal, afterNextRender, DestroyRef, inject, ChangeDetectionStrategy } from "@angular/core";
import { NgClass } from "@angular/common";
import { profile } from "../data/data";

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Desktop Nav -->
    <nav class="hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300" [ngClass]="scrolled() ? 'bg-white/50 backdrop-blur-xl shadow-sm py-4' : 'py-6'">
      <div class="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
        <a href="#hero" class="flex items-center gap-3 font-bold font-display text-lg text-slate-900">
          <span class="w-9 h-9 flex items-center justify-center bg-primary-600 text-white rounded-lg text-sm font-bold">SG</span>
          {{ profile.name }}
        </a>

        <ul class="flex items-center gap-8 list-none">
          @for (link of links; track link.id) {
            <li>
              <a [href]="'#' + link.id" class="text-sm font-medium  hover:text-primary-600 transition-colors relative py-2" [ngClass]="activeSection() === link.id ? 'text-primary-600 underline underline-offset-4 decoration-2' : 'text-slate-600'">
                {{ link.label }}
              </a>
            </li>
          }
          <li>
            <a href="#contact" class="btn-nav">Let's Talk</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Mobile Top Bar -->
    <div class="md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300" [ngClass]="scrolled() ? 'bg-white/85 backdrop-blur-xl shadow-sm py-4' : 'py-5'">
      <div class="px-5 flex items-center justify-between">
        <a href="#hero" class="flex items-center gap-3 font-bold font-display text-lg text-slate-900">
          <span class="w-9 h-9 flex items-center justify-center bg-primary-600 text-white rounded-lg text-sm font-bold">SG</span>
          {{ profile.name }}
        </a>

        <button class="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors" (click)="menuOpen.set(!menuOpen())" aria-label="Toggle menu">
          @if (menuOpen()) {
            <svg class="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          } @else {
            <svg class="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          }
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    @if (menuOpen()) {
      <div class="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" (click)="menuOpen.set(false)"></div>
    }

    <!-- Mobile Slide-Down Panel -->
    <div class="md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" [ngClass]="menuOpen() ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'">
      <div class="bg-white/70 backdrop-blur-2xl border-b border-white/30 shadow-2xl shadow-black/10">
        <div class="px-5 pt-24 pb-8">
          <!-- Links Grid -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            @for (link of links; track link.id) {
              <a [href]="'#' + link.id" (click)="menuOpen.set(false)" class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all" [ngClass]="activeSection() === link.id ? 'bg-primary-50 text-primary-700 border border-primary-200' : 'text-slate-600 hover:bg-white/60 hover:text-slate-900 border border-transparent'">
                <span class="w-2 h-2 rounded-full shrink-0" [ngClass]="activeSection() === link.id ? 'bg-primary-500' : 'bg-slate-300'"></span>
                {{ link.label }}
              </a>
            }
          </div>

          <!-- CTA -->
          <a href="#contact" (click)="menuOpen.set(false)" class="block w-full text-center btn-nav py-4 text-base"> Let's Talk </a>

          <!-- Profile Quick Info -->
          <div class="mt-6 pt-5 border-t border-slate-200/60 flex items-center justify-center gap-2 text-xs text-slate-400">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Available for work
          </div>
        </div>
      </div>
    </div>
  `,
})
export class NavComponent {
  profile = profile;
  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal("hero");

  private observer: IntersectionObserver | null = null;

  links = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  constructor() {
    const destroy = inject(DestroyRef);

    afterNextRender(() => {
      const onScroll = () => {
        this.scrolled.set(window.scrollY > 40);
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      const sections = this.links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }
          }
        },
        { rootMargin: "-20% 0px -70% 0px" },
      );

      sections.forEach((s) => this.observer!.observe(s));

      destroy.onDestroy(() => {
        window.removeEventListener("scroll", onScroll);
        this.observer?.disconnect();
      });
    });
  }
}
