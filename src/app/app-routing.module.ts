import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authloginGuard } from './guards/authlogin.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate:[authloginGuard]},
  {path:'home/:user',component:HomeComponent, canActivate:[authloginGuard]},
  {path:'**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*
{ path: '**', redirectTo: '', pathMatch: 'full' }
Este fragmento de código se utiliza en las rutas de Angular para establecer una redirección (redirect) en caso de que la URL no coincida con ninguna de las rutas definidas anteriormente. Veamos en detalle cada parte:

1.- path: '**': Este es un patrón de coincidencia de ruta especial que se considera un comodín. El doble asterisco (**) indica que esta ruta coincidirá con cualquier URL que no haya coincidido con ninguna de las rutas definidas previamente. Es una especie de "catch-all" para cualquier ruta no reconocida.

2.- redirectTo: '': Esto especifica a dónde se debe redirigir cuando se encuentra una URL que coincide con el patrón **. En este caso, se está redirigiendo a la raíz del sitio ('').

3.- pathMatch: 'full': Este parámetro especifica cómo debe coincidir la URL con la ruta. 'full' significa que se espera que toda la URL coincida con el patrón definido en path. En este caso, la URL completa debe coincidir con ** para que se active la redirección.
*/