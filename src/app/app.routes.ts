import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    { path: '', component: NavbarComponent }, // Página inicial com a navbar
    { path: 'services', component: ServicesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'footer', component: FooterComponent }
];

export class AppRoutingModule { }