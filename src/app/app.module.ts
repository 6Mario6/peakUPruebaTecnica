import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { UrlInputComponent } from './url-input/url-input.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalyzeTableComponent } from './analyze-table/analyze-table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
   declarations: [
      AppComponent,
      UrlInputComponent,
      AnalyzeTableComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      MatTableModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
