import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class StyleService {
  private renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private document: HTMLDocument, private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  createStyleSheet(href: string) {
    // https://codinglatte.com/posts/angular/lazy-loading-scripts-and-styles-angular/
    const link: HTMLLinkElement = this.renderer.createElement('link');
    link.href = href;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.media = 'screen,print';
    this.document.head.appendChild(link);
  }
}
