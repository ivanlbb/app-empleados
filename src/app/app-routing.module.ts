import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponentComponent},
  {path:'login', component: LoginComponent},
  {path:'proyectos', component: ProyectosComponentComponent},
  {path:'quienes', component: QuienesComponentComponent},
  {path:'contacto', component: ContactoComponentComponent},
  {path:'actualizar/:id', component: ActualizaComponentComponent},
  
  //cualquier cosa diferente a lo anterior, va al componente ErrorPersonalizado. Tiene que estar el ultimo para que funcione bien
  {path:'**', component: ErrorPersonalizadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
