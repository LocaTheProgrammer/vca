import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormPageComponent } from './pages/dynamic-form-page/dynamic-form-page.component';
import { DynamicTablePageComponent } from './pages/dynamic-table-page/dynamic-table-page.component';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './pages/input/input.component';
import { SelectComponent } from './pages/select/select.component';



const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'input', component: InputComponent },
    { path: 'select', component: SelectComponent },
    { path: 'form', component: FormComponent },
    { path: 'dynamic-form', component: DynamicFormPageComponent },
    { path: 'dynamic-table', component: DynamicTablePageComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }