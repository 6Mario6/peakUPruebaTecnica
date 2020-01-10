import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss']
})
export class UrlInputComponent implements OnInit {
  public urlForm: FormGroup;
  public showError = false;
  @Output() showTable = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
   this.urlForm =  this.fb.group({
      url: ['', [Validators.required, Validators.pattern(/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/)]]
    });
  }

  analyzeURL() {
    if (this.urlForm.valid) {
      this.showError = false;
      this.showTable.emit(true);
    } else {
      this.showError = true;
      this.showTable.emit(false);
    }
  }

  clearURL() {
    this.urlForm.reset();
    this.showError = false;
    this.showTable.emit(false);
  }

}
