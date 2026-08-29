import { Directive, ElementRef, OnInit, OnDestroy, input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, AfterViewInit, OnDestroy {
  appReveal = input<'single' | 'stagger' | ''>('single');
  revealDelay = input(0);

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    if (this.appReveal() === 'stagger') {
      el.classList.add('reveal-stagger');
    } else {
      el.classList.add('reveal');
    }
  }

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;

    if (this.revealDelay() > 0) {
      el.style.transitionDelay = `${this.revealDelay()}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
