import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  @Input() controls = {};
  @Input() submitText: string = "submit";
  @Input() link: string = "/main";
  @Input() linkText: string = "default"
  @Output() submitButton = new EventEmitter<object>();

  ngOnInit(): void {
    const controls: any = {};
    let i = 0;
    for (let key in this.controls) {
      controls[key] = new FormControl('');
      i++;
    }
    this.form.controls = controls;
  }

  click() {
    const data: any = {};
    for(let key in this.form.controls) {
      data[key] = this.form.controls[key].value;
    }
    this.submitButton.emit(data);
  }

}
