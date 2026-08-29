import { Component, AfterViewInit, ElementRef, viewChild } from "@angular/core";
import { NgClass } from "@angular/common";
import { gsap } from "gsap";
import { profile, codeSnippet } from "../data/data";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [NgClass],
  template: `
    <section id="hero" class="min-h-screen flex items-center relative overflow-hidden pt-20 pb-20">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <div class="absolute rounded-full blur-3xl opacity-35 animate-[float_12s_ease-in-out_infinite]" style="width:500px;height:500px;background:#599fff;top:-10%;right:-5%;"></div>
        <div class="absolute rounded-full blur-3xl opacity-35 animate-[float_12s_ease-in-out_infinite]" style="width:400px;height:400px;background:#4fd3b3;bottom:-10%;left:-5%;animation-delay:-6s;"></div>
        <div class="absolute inset-0" style="background-image:linear-gradient(rgba(100,116,139,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(100,116,139,0.04) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse at center,black 30%,transparent 75%);-webkit-mask-image:radial-gradient(ellipse at center,black 30%,transparent 75%);"></div>
      </div>

      <div class="relative z-10 section-container grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center w-full">
        <div class="max-w-2xl">
          <p class="font-mono text-base text-primary-600 mb-2 opacity-0" #greeting>Hi, I'm</p>
          <h1 class="text-5xl lg:text-7xl font-bold font-display leading-tight text-slate-900 mb-2 opacity-0" #name>{{ profile.name }}</h1>
          <h2 class="text-3xl lg:text-4xl font-semibold mb-6 opacity-0" #role>
            <span class="bg-linear-to-br from-primary-600 to-accent-500 bg-clip-text text-transparent">{{ profile.role }}</span>
          </h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl opacity-0" #tagline>{{ profile.tagline }}</p>

          <div class="flex gap-4 mb-8 opacity-0" #actions>
            <a href="#projects" class="btn-primary">
              View My Work
              <i class="fa-solid fa-arrow-right text-sm"></i>
            </a>
            <a href="#contact" class="btn-secondary"> Let's Talk </a>
          </div>

          <div class="flex gap-3 opacity-0" #socials>
            @for (social of profile.socials; track social.label) {
              <a [href]="social.url" target="_blank" rel="noopener" [attr.aria-label]="social.label" class="icon-btn">
                <i [ngClass]="getSocialIconClass(social.icon)"></i>
              </a>
            }
          </div>
        </div>

        <div class="flex justify-center opacity-0" #visual>
          <div class="w-full max-w-md bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div class="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <span class="w-3 h-3 rounded-full" style="background:#ff5f56"></span>
              <span class="w-3 h-3 rounded-full" style="background:#ffbd2e"></span>
              <span class="w-3 h-3 rounded-full" style="background:#27c93f"></span>
              <span class="ml-3 font-mono text-xs text-slate-500">developer.ts</span>
            </div>
            <pre class="p-6 font-mono text-sm leading-relaxed text-slate-300 overflow-x-auto"><code>{{ codeSnippet }}</code></pre>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-widest opacity-0" #scrollHint>
        <span>Scroll</span>
        <div class="w-px h-10 bg-linear-to-b from-slate-400 to-transparent animate-[scrollLine_2s_ease-in-out_infinite]"></div>
      </div>
    </section>
  `,
})
export class HeroComponent implements AfterViewInit {
  profile = profile;
  codeSnippet = codeSnippet;

  greeting = viewChild<ElementRef>("greeting");
  name = viewChild<ElementRef>("name");
  role = viewChild<ElementRef>("role");
  tagline = viewChild<ElementRef>("tagline");
  actions = viewChild<ElementRef>("actions");
  socials = viewChild<ElementRef>("socials");
  visual = viewChild<ElementRef>("visual");
  scrollHint = viewChild<ElementRef>("scrollHint");

  private socialMap: Record<string, string> = {
    github: "fa-brands fa-github",
    linkedin: "fa-brands fa-linkedin-in",
    twitter: "fa-brands fa-x-twitter",
    dribbble: "fa-brands fa-dribbble",
  };

  getSocialIconClass(name: string): string {
    return this.socialMap[name] || "fa-solid fa-link";
  }

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power3.out" } });

    tl.to(this.greeting()?.nativeElement, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(this.name()?.nativeElement, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.2")
      .fromTo(this.role()?.nativeElement, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
      .fromTo(this.tagline()?.nativeElement, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
      .fromTo(this.actions()?.nativeElement, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(this.socials()?.nativeElement, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2")
      .fromTo(this.visual()?.nativeElement, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.8")
      .to(this.scrollHint()?.nativeElement, { opacity: 1, duration: 0.5 }, "-=0.2");
  }
}
