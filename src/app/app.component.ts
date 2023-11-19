import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { ThemeModeService } from './shared/services/theme-mode.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'grot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private themeModeService : ThemeModeService, private overlay: OverlayContainer) {}

  ngOnInit(): void {
    this.renderer.setAttribute(this.document.body, 'class', 'g-theme-dark');
    this.themeModeService.isDark.set(true);
  }

  switchMode(isDarkMode: boolean){
    const hostClass = isDarkMode ? 'g-theme-dark' : 'g-theme-light';
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
    this.themeModeService.isDark.set(isDarkMode);
    this.overlay.getContainerElement().classList.add(hostClass);
  }
}
