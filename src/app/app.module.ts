import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { ViewAfiliadosComponent } from "./view-afiliados.component";
import { ViewCreditosComponent } from "./view-creditos.component";
import { ViewProductosComponent } from "./view-productos.component";
import { ViewUsuariosComponent } from "./view-usuarios.component";

const appRoutes: Routes = [
  { path: 'view-afiliados', component: ViewAfiliadosComponent },
  { path: 'view-creditos', component: ViewCreditosComponent },
  { path: 'view-productos', component: ViewProductosComponent },
  { path: 'view-usuarios', component: ViewUsuariosComponent },
  { path: '',
    redirectTo: '/view-afiliados',
    pathMatch: 'full'
  }
];
@NgModule({
  
  imports:      [RouterModule.forRoot(appRoutes ,{ useHash: true }), BrowserModule ],
  declarations: [ AppComponent, ViewAfiliadosComponent, 
                                ViewCreditosComponent,
                                ViewProductosComponent,
                                ViewUsuariosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
