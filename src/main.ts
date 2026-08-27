import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavComponent } from './components/nav.component';
import { HeroComponent } from './components/hero.component';
import { EducationComponent } from './components/education.component';
import { SkillsComponent } from './components/skills.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  template: `
    <app-nav />
    <main>
      <app-hero />
      <app-education />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-contact />
    </main>
  `,
})
export class App {}

bootstrapApplication(App);
