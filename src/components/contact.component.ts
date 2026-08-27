import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { profile, contactInfo } from '../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective, NgClass],
  template: `
    <section id="contact" class="py-32 bg-slate-950 text-white pb-0">
      <div class="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <div class="reveal" appReveal>
          <span class="inline-block font-mono text-sm font-medium text-primary-400 tracking-wider uppercase mb-3">// {{ contactInfo.label }}</span>
          <h2 class="text-4xl lg:text-6xl font-bold font-display text-white">{{ contactInfo.heading }}</h2>
          <p class="text-lg text-slate-400 max-w-xl mx-auto mt-4 mb-12">{{ contactInfo.subtitle }}</p>
        </div>
      </div>

      <div class="max-w-4xl mx-auto px-4 md:px-8">
        <div class="reveal grid md:grid-cols-3 gap-6" appReveal>
          <a [href]="'mailto:' + profile.email" class="flex flex-col items-center gap-3 p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all">
            <span class="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl text-primary-400 text-xl">
              <i class="fa-solid fa-envelope"></i>
            </span>
            <span class="text-xs text-slate-400 uppercase tracking-wide">Email</span>
            <span class="text-sm text-slate-200 font-medium">{{ profile.email }}</span>
          </a>

          <a [href]="'tel:' + profile.phone.replace(/[^+\\d]/g, '')" class="flex flex-col items-center gap-3 p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all">
            <span class="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl text-primary-400 text-xl">
              <i class="fa-solid fa-phone"></i>
            </span>
            <span class="text-xs text-slate-400 uppercase tracking-wide">Phone</span>
            <span class="text-sm text-slate-200 font-medium">{{ profile.phone }}</span>
          </a>

          <div class="flex flex-col items-center gap-3 p-8 bg-white/5 rounded-2xl border border-white/10">
            <span class="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl text-primary-400 text-xl">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <span class="text-xs text-slate-400 uppercase tracking-wide">Location</span>
            <span class="text-sm text-slate-200 font-medium">{{ profile.location }}</span>
          </div>
        </div>

        <div class="reveal flex justify-center gap-3 mt-8" appReveal>
          @for (social of profile.socials; track social.label) {
            <a [href]="social.url" target="_blank" rel="noopener" [attr.aria-label]="social.label"
               class="w-11 h-11 flex items-center justify-center bg-white/5 rounded-xl text-slate-300 hover:bg-primary-600 hover:text-white hover:-translate-y-1 transition-all text-lg">
              <i [ngClass]="getSocialIconClass(social.icon)"></i>
            </a>
          }
        </div>
      </div>

      <footer class="mt-32 py-8 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>Designed & built by {{ profile.name }}</p>
          <p>© 2026 — Built with Angular</p>
        </div>
      </footer>
    </section>
  `,
})
export class ContactComponent {
  profile = profile;
  contactInfo = contactInfo;

  private socialMap: Record<string, string> = {
    github: 'fa-brands fa-github',
    linkedin: 'fa-brands fa-linkedin-in',
    twitter: 'fa-brands fa-x-twitter',
    dribbble: 'fa-brands fa-dribbble',
  };

  getSocialIconClass(name: string): string {
    return this.socialMap[name] || 'fa-solid fa-link';
  }
}
