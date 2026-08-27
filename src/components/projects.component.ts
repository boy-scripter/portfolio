import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, ViewChild } from '@angular/core';
import scrollama from 'scrollama';
import { RevealDirective } from '../directives/reveal.directive';
import { projects } from '../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="projects" class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="reveal mb-16" appReveal>
          <span class="inline-block font-mono text-sm font-medium text-primary-600 tracking-wider uppercase mb-3">// Projects</span>
          <h2 class="text-4xl lg:text-6xl font-bold font-display text-slate-900">Featured Work</h2>
          <p class="text-lg text-slate-500 max-w-xl mt-4">A selection of projects I'm proud of. Scroll through to see each one come to life.</p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16" #scroller id="scroller">
        @for (project of projects; track project.id; let i = $index) {
          <div class="project-step opacity-15 scale-95 transition-all duration-700" [attr.data-step]="i" #projectStep>
            <div class="group grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all"
                 [class.border-primary-200]="project.featured">
              <div class="relative overflow-hidden min-h-[360px]">
                <img [src]="project.image" [alt]="project.title" loading="lazy"
                     class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end gap-3 p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a [href]="project.liveUrl" target="_blank" rel="noopener" class="w-10 h-10 flex items-center justify-center bg-white/95 text-slate-800 rounded-lg hover:bg-primary-600 hover:text-white hover:scale-110 transition-all" aria-label="Live demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  <a [href]="project.repoUrl" target="_blank" rel="noopener" class="w-10 h-10 flex items-center justify-center bg-white/95 text-slate-800 rounded-lg hover:bg-primary-600 hover:text-white hover:scale-110 transition-all" aria-label="Source code">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
                  </a>
                </div>
                @if (project.featured) {
                  <span class="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-primary-600 text-white rounded-full tracking-wide">Featured</span>
                }
              </div>
              <div class="p-10 flex flex-col justify-center">
                <span class="font-mono text-xs text-primary-600 font-medium mb-2">0{{ i + 1 }}</span>
                <h3 class="text-2xl lg:text-3xl font-bold font-display text-slate-900 mb-3">{{ project.title }}</h3>
                <p class="text-slate-600 leading-relaxed mb-5">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  @for (tag of project.tags; track tag) {
                    <span class="text-xs font-medium px-3 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">{{ tag }}</span>
                  }
                </div>
                <div class="flex gap-3">
                  <a [href]="project.liveUrl" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-3 bg-primary-600 text-white rounded-xl font-semibold text-sm hover:bg-primary-700 hover:-translate-y-0.5 transition-all">
                    Live Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                  <a [href]="project.repoUrl" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold text-sm hover:border-primary-400 hover:text-primary-600 transition-all">
                    Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .project-step.is-active {
      opacity: 1 !important;
      transform: scale(1) !important;
    }
  `],
})
export class ProjectsComponent implements AfterViewInit {
  projects = projects;

  @ViewChildren('projectStep') steps!: QueryList<ElementRef>;
  @ViewChild('scroller') scroller!: ElementRef;

  ngAfterViewInit(): void {
    const stepElements = this.steps.toArray().map((s) => s.nativeElement as HTMLElement);

    const scroller = scrollama();
    scroller
      .setup({
        step: '.project-step',
        offset: 0.6,
        debug: false,
      })
      .onStepEnter((response: { index: number }) => {
        stepElements.forEach((el, i) => {
          if (i === response.index) el.classList.add('is-active');
        });
      })
      .onStepExit((response: { index: number }) => {
        stepElements.forEach((el, i) => {
          if (i === response.index) el.classList.remove('is-active');
        });
      });

    window.addEventListener('resize', () => scroller.resize());
  }
}
