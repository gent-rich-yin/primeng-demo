import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { ButtonComponent } from './components/button/button.component';
import { SplitButtonComponent } from './components/split-button/split-button.component';
import { SpeedDialComponent } from './components/speed-dial/speed-dial.component';
import { MessageService } from 'primeng/api';
import { IconsComponent } from './components/icons/icons.component';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SplitButtonComponent,
    SpeedDialComponent,
    IconsComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule,
    ButtonModule,
    InputTextModule,
    SplitterModule,
    SplitButtonModule,
    SpeedDialModule,
    StyleClassModule,
    RippleModule,
    ToastModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
