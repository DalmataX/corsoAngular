import { Component } from '@angular/core';
import { HelloWorldComponent } from '../../components/hello-world/hello-world.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { UserComponent } from '../../components/user/user.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HelloWorldComponent,
    ProductListComponent,
    UserComponent,
    RouterModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  // messaggio: string = 'Ciao dal parent';
  // prodotti = [
  //   {
  //     prodotto: 'coca cola',
  //     prezzo: '2 euro',
  //   },
  //   {
  //     prodotto: 'spazzolino',
  //     prezzo: '1 euro',
  //   },
  //   {
  //     prodotto: 'carta igienica',
  //     prezzo: '5 euro',
  //   },
  //   {
  //     prodotto: 'pannolini',
  //     prezzo: '16 euro',
  //   },
  //   {
  //     prodotto: 'carne',
  //     prezzo: '5 euro',
  //   },
  //   {
  //     prodotto: 'acqua',
  //     prezzo: '2 euro',
  //   },
  //   {
  //     prodotto: 'gelatini',
  //     prezzo: '5 euro',
  //   },
  //   {
  //     prodotto: 'birra',
  //     prezzo: '4 euro',
  //   },
  // ];
}
