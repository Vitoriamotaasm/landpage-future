import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

// Importação dos componentes
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Indica que o componente é "standalone"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, FooterComponent, ButtonComponent, LogoComponent, NavbarComponent] // Importa o RouterModule para usar o roteamento
 // Importa o RouterModule para usar o roteamento
 // Importa o RouterModule para usar o roteamento
 // Importa o RouterModule para usar o roteamento
  // Importa o RouterModule para usar o roteamento
})
export class AppComponent {
  title = 'app';

  // Definindo as rotas diretamente no componente
  public routes: Routes = [
    { path: '', component: NavbarComponent }, // Página inicial com a navbar
    { path: 'services', component: ServicesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'footer', component: FooterComponent }
  ];
}
