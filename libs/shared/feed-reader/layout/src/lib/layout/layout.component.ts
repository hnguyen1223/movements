import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@movements/shared-data-access-settings';

@Component({
  selector: 'movements-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  leftWidth: number;
  constructor(private settings: SettingsService) {
    this.leftWidth = settings.get('sideNavWidth');
  }

  ngOnInit(): void {}

  onSideNavWidthChange(width: number) {
    this.settings.set('sideNavWidth', width);
  }
}
