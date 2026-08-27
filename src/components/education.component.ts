import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgClass } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RevealDirective } from '../directives/reveal.directive';
import { educations } from '../data/portfolio.data';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective, NgClass],
  template: `
    <section id="education" class="py-32 bg-slate-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="reveal mb-16" appReveal>
          <span class="inline-block font-mono text-sm font-medium text-primary-600 tracking-wider uppercase mb-3">// Education</span>
          <h2 class="text-4xl lg:text-6xl font-bold font-display text-slate-900">My Education</h2>
          <p class="text-lg text-slate-500 max-w-xl mt-4">My academic journey that built the foundation for my development career.</p>
        </div>

        <div class="relative">
          <div class="grid md:grid-cols-3 gap-6 md:gap-8 relative">
            @for (edu of educations; track edu.id; let i = $index) {
              <div class="relative flex flex-col" #eduCard>
                <div class="reveal bg-white rounded-2xl border border-slate-200 p-8 hover:border-primary-300 hover:shadow-xl hover:-translate-y-2 transition-all h-full group" appReveal [revealDelay]="i * 100">
                  <!-- Icon -->
                  <div class="flex items-center mb-5">
                    <div class="w-12 h-12 flex items-center justify-center bg-primary-50 rounded-xl text-primary-600 text-xl group-hover:bg-primary-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                      <i [ngClass]="getEduIcon(edu.degree)"></i>
                    </div>
                  </div>

                  <span class="inline-block font-mono text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">{{ edu.period }}</span>
                  <h3 class="text-lg font-bold font-display text-slate-900 leading-tight mb-2">{{ edu.degree }}</h3>
                  <p class="text-sm font-semibold text-primary-600 mb-1">{{ edu.institution }}</p>
                  <p class="text-xs text-slate-500 flex items-center gap-1"><i class="fa-solid fa-location-dot"></i> {{ edu.location }}</p>

                  <!-- Hover arrow -->
                  <div class="mt-4 flex items-center gap-2 text-primary-600 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300 text-xs font-medium">
                    <span>View Details</span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>

                <!-- Arrow between cards - reversed direction, centered in gap (moved off card) -->
                @if (i < educations.length - 1) {
                  <div class="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-8 z-10 w-8 h-8 bg-white border-2 border-primary-200 rounded-full items-center justify-center text-primary-600 shadow-md animate-[pulse_2s_ease-in-out_infinite]" #eduArrow>
                    <i class="fa-solid fa-arrow-left text-xs"></i>
                  </div>
                  <!-- Mobile vertical arrow - reversed -->
                  <div class="md:hidden flex justify-center my-2" #eduArrowMobile>
                    <div class="w-8 h-8 bg-white border-2 border-primary-200 rounded-full flex items-center justify-center text-primary-600 shadow-md">
                      <i class="fa-solid fa-arrow-up text-xs"></i>
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent implements AfterViewInit {
  educations = educations;

  @ViewChildren('eduCard') cards!: QueryList<ElementRef>;
  @ViewChildren('eduLine') line!: QueryList<ElementRef>;
  @ViewChildren('eduArrow') arrows!: QueryList<ElementRef>;

  getEduIcon(degree: string): string {
    const d = degree.toLowerCase();
    if (d.includes('bachelor') || d.includes('bca') || d.includes('college')) return 'fa-solid fa-graduation-cap';
    return 'fa-solid fa-school';
  }

  ngAfterViewInit(): void {
    const cards = this.cards.toArray().map(c => c.nativeElement as HTMLElement);
    const line = this.line.first?.nativeElement as HTMLElement;
    const arrows = this.arrows.toArray().map(a => a.nativeElement as HTMLElement);

    if (line) {
      gsap.fromTo(line, { scaleX: 0, transformOrigin: 'left center' }, {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });
    }

    gsap.fromTo(cards, { y: 60, opacity: 0, scale: 0.95 }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: cards[0]?.parentElement,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });

    if (arrows.length) {
      gsap.fromTo(arrows, { scale: 0, rotation: -180 }, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: arrows[0]?.parentElement?.parentElement,
          start: 'top 80%',
        }
      });
      // Continuous float
      gsap.to(arrows, { x: 4, duration: 0.8, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.1, delay: 1 });
    }
  }
}
