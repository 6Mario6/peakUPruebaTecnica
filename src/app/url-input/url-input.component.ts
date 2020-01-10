import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss']
})
export class UrlInputComponent implements OnInit {
  public urlForm: FormGroup;
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

  }

  clearURL() {
    this.urlForm.reset();
  }

}
