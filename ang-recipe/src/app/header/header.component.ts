import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featureSelection = new EventEmitter<string>();

  collapsed = true;

  navigatingTo(feature: string){
      this.featureSelection.emit(feature);
  }
}
