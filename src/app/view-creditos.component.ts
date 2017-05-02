import { Component } from '@angular/core';

@Component({
  selector: 'view-creditos',
  template: `
      <div class="container">
      
        <h3 class="h3">CREDITOS</h3>
             <table class="table table-responsive">
              <thead>
                <tr>
                    <th>Credito</th>
                    <th>Razon Social</th>
                    <th>Dirección</th>
                </tr>
           </thead>
            <tbody>
                <tr>
                  <td>$35,00</td>
                  <td>Eclair Dsllen</td>
                  <td>Truen 577</td>
                  
                </tr>
                <tr>
                   <td>$35,00</td>
                  <td>Jellybean Doolm</td>
                  <td>Gallee 655</td>
                </tr>
                <tr>
                   <td>$35,00</td>
                  <td>Lollipop Arnee</td>
                  <td>Fliisd 322</td>

                </tr>
              </tbody>
          </table>
    </div>
  `
})
export class ViewCreditosComponent {
}