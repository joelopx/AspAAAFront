import { Component} from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core'
@Component({
  selector: 'my-app',
  template: `<nav class="navbar navbar-inverse navbar-fixed-top">
              <div class="container">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#">Aeronavegantes</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
                  <ul class="nav navbar-nav">
                    <li><a routerLink="/view-afiliados" routerLinkActive="active">Afiliados</a></li>
                    <li><a routerLink="/view-creditos" routerLinkActive="active">Creditos</a></li>
                    <li><a routerLink="/view-productos" routerLinkActive="active">Productos</a></li>
                    <li><a routerLink="/view-usuarios" routerLinkActive="active">Usuarios</a></li> 
                  </ul>
                </div>
              </div>
            </nav>
            <br><br>
               <router-outlet>    
               </router-outlet>
             `,

})


export class AppComponent implements AfterViewInit { 
  @ViewChild('nav') textarea: ElementRef
   ngAfterViewInit() {
     var btn = document.getElementsByClassName("button-collapse");

  }
}
