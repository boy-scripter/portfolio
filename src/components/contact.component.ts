import { Component } from "@angular/core";
import { NgClass } from "@angular/common";
import { RevealDirective } from "../directives/reveal.directive";
import { profile, contactInfo } from "../data/data";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [RevealDirective, NgClass],
  template: `
    <section id="contact" class="py-32 bg-slate-950 text-white pb-0">
      <div class="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <div class="reveal" appReveal>
          <span class="section-label--dark">// {{ contactInfo.label }}</span>
          <h2 class="section-heading--dark">
            {{ contactInfo.heading }}
          </h2>
          <p class="section-description--dark mx-auto mb-12">
            {{ contactInfo.subtitle }}
          </p>
        </div>
      </div>

      <div class="max-w-4xl mx-auto px-4 md:px-8">
        <div class="reveal grid md:grid-cols-4 gap-6" appReveal>
          <a [href]="'mailto:' + profile.email" class="contact-card">
            <span class="icon-box--lg">
              <i class="fa-solid fa-envelope"></i>
            </span>
            <span class="text-xs text-slate-400 uppercase tracking-wide">Email</span>
            <span class="text-xs sm:text-sm text-slate-200 font-medium break-all">{{ profile.email }}</span>
          </a>

          <a [href]="'tel:' + profile.phone.replace(/[^+\\d]/g, '')" class="contact-card">
            <span class="icon-box--lg">
              <i class="fa-solid fa-phone"></i>
            </span>
            <span class="text-xs text-slate-400 uppercase tracking-wide">Phone</span>
            <span class="text-sm text-slate-200 font-medium">{{ profile.phone }}</span>
          </a>

          <a [href]="'https://wa.me/' + profile.phone.replace(/[^\\d]/g, '')" target="_blank" rel="noopener" class="contact-card">
            <span class="icon-box--lg">
              <i class="fa-brands fa-whatsapp"></i>
            </span>
            <span class="text-xs text-slate-400 uppercase tracking-wide">WhatsApp</span>
            <span class="text-sm text-slate-200 font-medium">Let's Chat</span>
          </a>

          <div class="contact-card">
            <span class="icon-box--lg">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <span class="text-xs text-slate-400 uppercase tracking-wide">Location</span>
            <span class="text-sm text-slate-200 font-medium">{{ profile.location }}</span>
          </div>
        </div>

        <div class="reveal flex justify-center gap-3 mt-8" appReveal>
          @for (social of profile.socials; track social.label) {
            <a [href]="social.url" target="_blank" rel="noopener" [attr.aria-label]="social.label" class="icon-btn--dark">
              <i [ngClass]="getSocialIconClass(social.icon)"></i>
            </a>
          }
        </div>
      </div>

      <footer class="mt-32 py-8 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>Designed & built by {{ profile.name }}</p>
          <p class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Let's Talk — © 2026
          </p>
        </div>
      </footer>
    </section>
  `,
})
export class ContactComponent {
  profile = profile;
  contactInfo = contactInfo;
  ngDoCheck() {
    console.log("test");
  }

  private socialMap: Record<string, string> = {
    github: "fa-brands fa-github",
    linkedin: "fa-brands fa-linkedin-in",
    twitter: "fa-brands fa-x-twitter",
    dribbble: "fa-brands fa-dribbble",
  };

  getSocialIconClass(name: string): string {
    return this.socialMap[name] || "fa-solid fa-link";
  }
}
