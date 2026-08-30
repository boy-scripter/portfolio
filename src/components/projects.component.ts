import { Component, AfterViewInit, ElementRef, viewChildren, viewChild } from "@angular/core";
import scrollama from "scrollama";
import { RevealDirective } from "../directives/reveal.directive";
import { projects } from "../data/data";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="projects" class="py-32 bg-slate-50">
      <div class="section-container">
        <div class="reveal mb-16" appReveal>
          <span class="section-label">// Projects</span>
          <h2 class="section-heading">Featured Work</h2>
          <p class="section-description">A selection of projects I'm proud of. Scroll through to see each one come to life.</p>
        </div>
      </div>

      <div class="section-container flex flex-col gap-10" #scroller id="scroller">
        @for (project of projects; track project.id; let i = $index) {
          <div class="project-step opacity-15 scale-95 transition-all duration-700" [attr.data-step]="i" #projectStep>
            <div class="group bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300">
              <!-- Gradient Header -->
              <div class="relative h-3 bg-linear-to-r from-primary-500 via-primary-400 to-accent-500"></div>

              <div class="p-8 md:p-10">
                <!-- Top Row: Number + Badge + Actions -->
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-3">
                    <span class="flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-primary-500 to-primary-600 text-white font-bold font-mono text-lg shadow-lg shadow-primary-500/25">
                      {{ i + 1 }}
                    </span>
                    @if (project.featured) {
                      <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        Featured
                      </span>
                    }
                  </div>
                  <div class="flex items-center gap-2">
                    @if (project.liveUrl) {
                      <a [href]="project.liveUrl" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                      </a>
                    }
                    @if (project.repoUrl) {
                      <a [href]="project.repoUrl" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
                          />
                        </svg>
                        Source
                      </a>
                    }
                  </div>
                </div>

                <!-- Title -->
                <h3 class="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 tracking-tight">{{ project.title }}</h3>

                <!-- Description -->
                <p class="text-slate-600 leading-relaxed mb-6 text-base">{{ project.description }}</p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  @for (tag of project.tags; track tag) {
                    <span class="inline-flex items-center px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200/50">
                      {{ tag }}
                    </span>
                  }
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .project-step.is-active {
        opacity: 1 !important;
        transform: scale(1) !important;
      }
    `,
  ],
})
export class ProjectsComponent implements AfterViewInit {
  projects = projects;

  steps = viewChildren<ElementRef>("projectStep");
  scroller = viewChild<ElementRef>("scroller");

  ngAfterViewInit(): void {
    const stepElements = this.steps().map((s) => s.nativeElement as HTMLElement);

    const scroller = scrollama();
    scroller
      .setup({
        step: ".project-step",
        offset: 0.6,
        debug: false,
      })
      .onStepEnter((response: { index: number }) => {
        stepElements.forEach((el, i) => {
          if (i === response.index) el.classList.add("is-active");
        });
      })
      .onStepExit((response: { index: number }) => {
        stepElements.forEach((el, i) => {
          if (i === response.index) el.classList.remove("is-active");
        });
      });

    window.addEventListener("resize", () => scroller.resize());
  }
}
