import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { FormazioneFormComponent } from './components/formazione-form/formazione-form.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './pages/input/input.component';
import { SelectComponent } from './pages/select/select.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './pages/form/form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DynamicFormPageComponent } from './pages/dynamic-form-page/dynamic-form-page.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { NamePipe } from './pipe/name.pipe';
import { DynamicTablePageComponent } from './pages/dynamic-table-page/dynamic-table-page.component';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,
    ReactiveFormsModule],
  declarations: [
    AppComponent,
    NamePipe,
    CustomInputComponent,
    SearchComponent,
    FormazioneFormComponent,
    HomeComponent,
    InputComponent,
    SelectComponent,
    FormComponent,
    UserFormComponent,
    DynamicFormPageComponent,
    DynamicFormComponent,
    DynamicTableComponent,
    DynamicTablePageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
