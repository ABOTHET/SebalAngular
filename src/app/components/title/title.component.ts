import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input() px: string = "12";
  @Input() color: string = "black";

  getStyles() {
    const styles = {
      "font-size": `${this.px}px`,
      color: this.color
    }
    return styles;
  }

}
