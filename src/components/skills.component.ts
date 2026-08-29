import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { skillCategories } from '../data/data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective, NgClass],
  template: `
    <section id="skills" class="py-32 bg-white">
      <div class="section-container">
        <div class="reveal mb-16" appReveal>
          <span class="section-label">// Skills</span>
          <h2 class="section-heading">Technologies I Work With</h2>
          <p class="section-description">A curated toolkit honed over years of building production-grade web applications.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          @for (cat of skillCategories; track cat.name; let i = $index) {
            <div class="reveal p-8 interactive-card"
                 appReveal [revealDelay]="i * 100">
              <div class="flex items-center gap-3 mb-6">
                <span class="icon-box">
                  <i [ngClass]="getCategoryIconClass(cat.icon)"></i>
                </span>
                <h3 class="text-xl font-semibold font-display text-slate-900">{{ cat.name }}</h3>
              </div>
              <div class="grid grid-cols-2 gap-4">
                @for (skill of cat.skills; track skill.name) {
                  <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                    <i [ngClass]="getTechIconClass(skill.icon)" [style.color]="skill.color" class="text-[26px] leading-none shrink-0 inline-block"></i>
                    <span class="font-medium text-slate-700 text-sm">{{ skill.name }}</span>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  skillCategories = skillCategories;

  private categoryMap: Record<string, string> = {
    code: 'fa-solid fa-code',
    layers: 'fa-solid fa-layer-group',
    palette: 'fa-solid fa-palette',
    wrench: 'fa-solid fa-screwdriver-wrench',
  };

  private techMap: Record<string, string> = {
    typescript: 'devicon-typescript-plain',
    javascript: 'devicon-javascript-plain',
    html5: 'devicon-html5-plain',
    css3: 'devicon-css3-plain',
    angular: 'devicon-angularjs-plain',
    react: 'devicon-react-original',
    nextdotjs: 'devicon-nextjs-plain',
    tailwindcss: 'devicon-tailwindcss-original',
    greensock: 'fa-solid fa-bolt',
    git: 'devicon-git-plain',
    vite: 'devicon-vitejs-plain',
    docker: 'devicon-docker-plain',
  };

  getCategoryIconClass(name: string): string {
    return this.categoryMap[name] || 'fa-solid fa-star';
  }

  getTechIconClass(name: string): string {
    return this.techMap[name] || 'fa-solid fa-cube';
  }
}
