import { Component, AfterViewInit, ElementRef, viewChildren } from "@angular/core";
import { NgClass } from "@angular/common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealDirective } from "../directives/reveal.directive";
import { educations } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-education",
  standalone: true,
  imports: [RevealDirective, NgClass],
  template: `
    <section id="education" class="py-32 bg-slate-50">
      <div class="section-container">
        <div class="reveal mb-16" appReveal>
          <span class="section-label">// Education</span>
          <h2 class="section-heading">My Education</h2>
          <p class="section-description">My academic journey that built the foundation for my development career.</p>
        </div>

        <div class="relative max-w-225 mx-auto py-10" #eduWrap>
          <div class="edu-line absolute top-0 bottom-0 w-0.5 bg-slate-200 origin-top left-5 md:left-1/2 md:-translate-x-1/2" #eduLine></div>

          @for (edu of educations; track edu.id; let i = $index) {
            <div class="edu-item relative pb-14 w-full md:w-1/2" [ngClass]="i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:left-1/2 md:pl-12 md:text-left'" #eduItem>
              <div
                class="edu-dot absolute top-2 w-4 h-4 bg-primary-600 border-4 border-white rounded-full shadow-[0_0_0_4px_#d9eaff] z-2
                          left-3 "
                [ngClass]="i % 2 === 0 ? 'md:-right-2 md:left-auto' : 'md:right-auto md:-left-2'"
              ></div>
              <div class="bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-primary-300 hover:shadow-[0_10px_40px_rgba(51,119,255,0.1)] hover:-translate-y-1">
                <div class="edu-icon-wrap w-12 h-12 flex items-center justify-center bg-primary-50 text-primary-600 rounded-xl text-xl mb-4 ml-0 mr-auto md:ml-auto md:mr-0">
                  <i [ngClass]="edu.icon"></i>
                </div>
                <span class="inline-block font-mono text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">{{ edu.period }}</span>
                <h3 class="text-lg font-bold font-display text-slate-900 leading-tight mb-2">{{ edu.degree }}</h3>
                <p class="text-sm font-semibold text-primary-600 mb-2">{{ edu.institution }}</p>
                @if (edu.location) {
                  <p class="edu-loc text-xs text-slate-500 flex items-center gap-1.5 justify-start md:justify-end"><i class="fa-solid fa-location-dot"></i> {{ edu.location }}</p>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent implements AfterViewInit {
  educations = educations;

  items = viewChildren<ElementRef>("eduItem");
  line = viewChildren<ElementRef>("eduLine");
  wrap = viewChildren<ElementRef>("eduWrap");

  ngAfterViewInit(): void {
    const lineEl = this.line()[0]?.nativeElement as HTMLElement;
    const wrapEl = this.wrap()[0]?.nativeElement as HTMLElement;

    if (lineEl && wrapEl) {
      gsap.fromTo(
        lineEl,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapEl,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        },
      );
    }

    this.items().forEach((item, i) => {
      const el = item.nativeElement as HTMLElement;
      const isLeft = i % 2 === 0;

      gsap.fromTo(
        el,
        { x: isLeft ? -60 : 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }
}
