import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-icon-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="interactive-card p-8 h-full w-full group hover:-translate-y-2"
         [class.reveal]="useReveal()">
      <div class="flex items-center mb-5">
        <div class="w-12 h-12 flex items-center justify-center bg-primary-50 rounded-xl text-primary-600 text-xl group-hover:bg-primary-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
          <i [ngClass]="icon()"></i>
        </div>
      </div>

      <span class="inline-block font-mono text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">{{ period() }}</span>
      <h3 class="text-lg font-bold font-display text-slate-900 leading-tight mb-2">{{ title() }}</h3>
      <p class="text-sm font-semibold text-primary-600 mb-1">{{ subtitle() }}</p>
      @if (location()) {
        <p class="text-xs text-slate-500 flex items-center gap-1">
          <i class="fa-solid fa-location-dot"></i> {{ location() }}
        </p>
      }

      <div class="mt-4 flex items-center gap-2 text-primary-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-xs font-medium">
        <span>{{ actionLabel() }}</span>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  `,
})
export class IconCardComponent {
  icon = input.required<string>();
  period = input.required<string>();
  title = input.required<string>();
  subtitle = input.required<string>();
  location = input('');
  actionLabel = input('View Details');
  useReveal = input(true);
}
