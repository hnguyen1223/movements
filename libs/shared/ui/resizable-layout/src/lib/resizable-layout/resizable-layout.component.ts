import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Directive({ selector: '[resizableLayoutLeft]' })
export class ResizableLayoutLeft {
  constructor() {}
  @HostBinding('class') classes = 'resizable-layout-left';
  @HostBinding('style.width.px') @Input() width = 0;
  @HostBinding('style.userSelect') userSelect = 'none';
}

@Directive({ selector: '[resizableLayoutRight]' })
export class ResizableLayoutRight {
  constructor() {}
  @HostBinding('class') classes = 'resizable-layout-right';
  @HostBinding('style.flex') flex = '1 1 0%';
  @HostBinding('style.userSelect') userSelect = 'none';
}

@Component({
  selector: 'movements-resizable-layout',
  templateUrl: './resizable-layout.component.html',
  styleUrls: ['./resizable-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizableLayoutComponent implements OnInit {
  @Input() minLeftWidth = 160;
  @Input() maxLeftWidth = 960;
  @Output() leftWidthChange = new EventEmitter<number>();
  @ContentChild(ResizableLayoutLeft) left!: ResizableLayoutLeft;
  x = 0;
  y = 0;
  isMouseDown = false;
  constructor() {}

  ngOnInit(): void {}

  onMouseDown(e: MouseEvent) {
    this.isMouseDown = true;
    this.x = e.clientX;
    this.y = e.clientY;
  }

  onMouseMove(e: MouseEvent) {
    const dx = e.clientX - this.x;
    document.body.style.cursor = 'col-resize';
    if (
      this.left.width + dx >= this.minLeftWidth &&
      this.left.width + dx <= this.maxLeftWidth
    ) {
      this.x = e.clientX;
      this.left.width += dx;
      this.leftWidthChange.emit(this.left.width);
    }
  }

  onMouseUp() {
    document.body.style.cursor = 'default';
    this.isMouseDown = false;
  }
}
