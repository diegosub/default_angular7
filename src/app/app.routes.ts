import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TemplateComponent } from './components/shared/template/template.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import { CONTENT_ROUTES } from './components/shared/shared.routes';


const appRoutes : Routes = [


    { path : 'login', component: LoginComponent },
    { path: '', component: TemplateComponent, data: { title: 'full Views' }, children: CONTENT_ROUTES },
    { path : '**', component: NotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
