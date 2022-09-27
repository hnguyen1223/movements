import {
  Component,
  Directive,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({ selector: '[headerBarIcon]' })
export class headerBarIcon {
  constructor() {}

  @HostBinding('class') classes = 'resizable-layout-left';
}

@Directive({ selector: '[headerBarHeading]' })
export class headerBarHeading {
  constructor() {}
  @HostBinding('class') classes = 'resizable-layout-left';
  @HostBinding('style.margin') margin = '8px 16px 8px 16px';
}

@Directive({ selector: '[headerBarControl]' })
export class headerBarControl {
  constructor() {}
  @HostBinding('class') classes = 'resizable-layout-left';
}

@Component({
  selector: 'movements-shared-ui-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  @Input() heading: string = '';
  constructor() {}

  ngOnInit(): void {}
}
