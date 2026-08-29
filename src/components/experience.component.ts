import { Component, AfterViewInit, ElementRef, viewChildren } from "@angular/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealDirective } from "../directives/reveal.directive";
import { experiences } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="experience" class="py-32 bg-slate-50">
      <div class="section-container">
        <div class="reveal mb-16" appReveal>
          <span class="section-label">// Experience</span>
          <h2 class="section-heading">My Career Journey</h2>
          <p class="section-description">A timeline of roles where I've grown, shipped, and made an impact.</p>
        </div>

        <div class="relative pl-12 md:pl-12" #timelineWrap>
          <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 origin-top" #timelineLine></div>

          @for (exp of experiences; track exp.id; let i = $index) {
            <div class="relative mb-12 last:mb-0" #timelineItem>
              <div class="absolute top-2 w-4 h-4 rounded-full bg-primary-600 border-[3px] border-white shadow-[0_0_0_4px_#d9eaff] z-10" style="left: -39px"></div>
              <div class="bg-white rounded-2xl border border-slate-200 p-8 hover:border-primary-300 hover:shadow-lg hover:translate-x-1 transition-all">
                <div class="flex justify-between items-center mb-3 flex-wrap gap-1">
                  <span class="font-mono text-xs text-primary-600 font-medium">{{ exp.period }}</span>
                  <span class="text-xs text-slate-500">{{ exp.location }}</span>
                </div>
                <h3 class="text-xl lg:text-2xl font-bold font-display text-slate-900 mb-1">{{ exp.role }}</h3>
                <p class="text-base text-primary-600 font-semibold mb-4">{{ exp.company }}</p>
                <p class="text-slate-600 leading-relaxed mb-5">{{ exp.description }}</p>
                <ul class="list-none mb-5">
                  @for (ach of exp.achievements; track $index) {
                    <li class="flex items-start gap-3 mb-3 text-sm text-slate-700 leading-relaxed">
                      <span class="shrink-0 w-5 h-5 flex items-center justify-center bg-accent-50 text-accent-600 rounded-full mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {{ ach }}
                    </li>
                  }
                </ul>
                <div class="flex flex-wrap gap-2">
                  @for (tag of exp.tags; track tag) {
                    <span class="tag">{{ tag }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent implements AfterViewInit {
  experiences = experiences;

  items = viewChildren<ElementRef>('timelineItem');
  line = viewChildren<ElementRef>('timelineLine');
  wrap = viewChildren<ElementRef>('timelineWrap');

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
      gsap.fromTo(
        el,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.05,
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
