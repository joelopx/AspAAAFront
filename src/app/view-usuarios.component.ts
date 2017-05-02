import { Component } from '@angular/core';

@Component({
  selector: 'view-afiliados',
  template: `
    <div class="container">
      
        <h3 class="h3">USUARIOS</h3>
             <table class="table table-responsive">
              <thead>
                <tr>
                    <th>Documento</th>
                    <th>Razon Social</th>
                    <th>Dirección</th>
                </tr>
           </thead>
            <tbody>
                <tr>
                  <td>38.586.255</td>
                  <td>Eclair Dsllen</td>
                  <td>Truen 577</td>
                  
                </tr>
                <tr>
                  <td>78.366.255</td>
                  <td>Jellybean Doolm</td>
                  <td>Gallee 655</td>
                </tr>
                <tr>
                  <td>32.552.212</td>
                  <td>Lollipop Arnee</td>
                  <td>Fliisd 322</td>

                </tr>
              </tbody>
          </table>
    </div>
  `
})
export class ViewUsuariosComponent {
}