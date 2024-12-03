import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login.guard';

const routes: Routes = [
  {path:'', component: HomeComponentComponent, canActivate:[LoginGuardian]},
  {path:'login', component: LoginComponent},
  {path:'proyectos', component: ProyectosComponentComponent, canActivate:[LoginGuardian]},
  {path:'quienes', component: QuienesComponentComponent, canActivate:[LoginGuardian]},
  {path:'contacto', component: ContactoComponentComponent, canActivate:[LoginGuardian]},
  {path:'actualizar/:id', component: ActualizaComponentComponent, canActivate:[LoginGuardian]},
  
  //cualquier cosa diferente a lo anterior, va al componente ErrorPersonalizado. Tiene que estar el ultimo para que funcione bien
  {path:'**', component: ErrorPersonalizadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
