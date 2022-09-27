import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[movementsLineClamp]',
  standalone: true,
})
export class LineClampDirective {
  @Input() set movementsLineClamp(value: number) {
    this.lines = value;
  }
  @HostBinding('style.display') display = '-webkit-box';
  @HostBinding('style.-webkit-box-orient') orient = 'vertical';
  @HostBinding('style.-webkit-line-clamp') lines = 2;
  @HostBinding('style.overflow-y') overflowY = 'hidden';
  constructor() {}
}
