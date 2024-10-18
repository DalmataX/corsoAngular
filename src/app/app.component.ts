import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { Esercizio1Component } from './components/esercizio-1/esercizio-1.component';
import { CounterComponent } from './components/counter/counter.component';
('./components/counter/counter.component');
import { SommatoreComponent } from './components/sommatore/sommatore.component';
import { VisibilitaComponent } from './components/visibilita/visibilita.component';
import { CaricamentoComponent } from './components/caricamento/caricamento.component';
import { ElencopersoneComponent } from './components/elenco-persone/elenco-persone.component';
import { DropdownComponent } from './components/drop-down/drop-down.component';
import { GestioneRuoloComponent } from './components/gestione-ruolo/gestione-ruolo.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private route: Router) {}

  goToUser() {
    this.route.navigate(['/elenco']);
  }
  title = 'corsoAngular';

  ngOnInit() {
    console.log('Ciao, benvenuto nel mondo di Angular!');
  }

  imageUrl: string = 'https://seeklogo.com/vector-logo/272812/angular';
}
