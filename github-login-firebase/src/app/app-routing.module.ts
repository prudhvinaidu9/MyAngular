import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PagenotfoundComponent} from './pages/pagenotfound/pagenotfound.component';
import {HomeComponent} from './pages/home/home.component';
import {SigninComponent} from './pages/signin/signin.component';
import {SignupComponent} from './pages/signup/signup.component';

//guarding
import { AngularFireAuthGuard,
redirectUnauthorizedTo,
redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome=()=> redirectLoggedInTo(['']);



const routes: Routes = [
    { 
      path: 'signin', 
      component: SigninComponent,        
      canActivate: [AngularFireAuthGuard], 
      data: { authGuardPipe: redirectLoggedInToHome },
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: '',
      component: HomeComponent,
      canActivate: [AngularFireAuthGuard], 
      data: { authGuardPipe: redirectUnauthorizedToLogin },
    },
    {
      path: "**",
      component: PagenotfoundComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
