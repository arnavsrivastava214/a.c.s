import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private _container: HTMLElement | null = null;

  defaults = {
    width: '',
    icon: '',
    displayDuration: 3000,
    pos: '',
  };

  constructor(private sanitizer: DomSanitizer) {}

  private alert(type: string, message: string, title: string = '', icon: string = '', options: any = {}) {
    options = { ...this.defaults, ...options };

    if (!this._container) {
      this._container = document.getElementById('alerts');
      if (!this._container) {
        this._container = document.createElement('ul');
        this._container.id = 'alerts';
        document.body.appendChild(this._container);
      }
    }

    if (options.width) {
      this._container.style.width = options.width;
    }

    const alertElem = document.createElement('li');
    alertElem.className = `alert alert-${type}`;
    
    setTimeout(() => {
      alertElem.classList.add('open');
    }, 1);

    if (icon) {
      const iconElem = document.createElement('i');
      iconElem.className = icon;
      alertElem.appendChild(iconElem);
    }

    const innerElem = document.createElement('div');
    innerElem.className = 'alert-block';
    alertElem.appendChild(innerElem);

    if (title) {
      const titleElem = document.createElement('div');
      titleElem.className = 'alert-title';
      titleElem.innerText = title;
      innerElem.appendChild(titleElem);
    }

    if (message) {
      const messageElem = document.createElement('div');
      messageElem.className = 'alert-message';
      messageElem.innerText = message;
      innerElem.appendChild(messageElem);
    }

    if (options.displayDuration > 0) {
      setTimeout(() => this.leave(alertElem), options.displayDuration);
    } else {
      const dismissElem = document.createElement('em');
      dismissElem.innerText = 'Click to Dismiss';
      innerElem.appendChild(dismissElem);
    }

    alertElem.addEventListener('click', () => this.leave(alertElem));

    this._container.prepend(alertElem);
  }

  private leave(alertElem: HTMLElement) {
    alertElem.classList.remove('open');
    alertElem.addEventListener('transitionend', () => {
      alertElem.remove();
    });
  }

  info(message: string, title?: string, options?: any) {
    this.alert('info', message, title, 'fa fa-info-circle', options);
  }

  warning(message: string, title?: string, options?: any) {
    this.alert('warning', message, title, 'fa fa-warning', options);
  }

  error(message: string, title?: string, options?: any) {
    this.alert('error', message, title, 'fa fa-exclamation-circle', options);
  }

  trash(message: string, title?: string, options?: any) {
    this.alert('trash', message, title, 'fa fa-trash-o', options);
  }

  success(message: string, title?: string, options?: any) {
    this.alert('success', message, title, 'fa fa-check-circle', options);
  }
}
