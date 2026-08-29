import { Component, input } from '@angular/core';

@Component({
  selector: 'app-arrow-connector',
  standalone: true,
  template: `
    <!-- Desktop horizontal arrow -->
    <div class="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-8 z-10 w-8 h-8 bg-white border-2 border-primary-200 rounded-full items-center justify-center text-primary-600 shadow-md opacity-0 animate-arrow-enter"
         [style.animation-delay]="delay() + 'ms'">
      <i class="fa-solid fa-arrow-right text-xs animate-arrow-float will-change-transform"></i>
    </div>
    <!-- Mobile vertical arrow -->
    <div class="md:hidden flex justify-center my-2">
      <div class="w-8 h-8 bg-white border-2 border-primary-200 rounded-full flex items-center justify-center text-primary-600 shadow-md opacity-0 animate-arrow-enter"
           [style.animation-delay]="delay() + 'ms'">
        <i class="fa-solid fa-arrow-down text-xs animate-arrow-float will-change-transform"></i>
      </div>
    </div>
  `,
})
export class ArrowConnectorComponent {
  delay = input(0);
}
