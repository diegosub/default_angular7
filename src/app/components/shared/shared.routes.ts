import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { AuthGuard } from '../security/auth.guard';


export const CONTENT_ROUTES: Routes = [

    { path : '', component: HomeComponent, canActivate: [AuthGuard] },
    
]
