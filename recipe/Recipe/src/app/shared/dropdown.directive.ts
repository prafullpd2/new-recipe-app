import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({selector: '[appDropdown]'})
export class DropdownDirective {
  constructor(private eleref: ElementRef, private rederer: Renderer2) {}
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen = () => {
    this.isOpen = !this.isOpen;
  }




}
