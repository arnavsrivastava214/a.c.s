import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   //Authentication group starts here --
  {
    path:'',
    loadChildren: () => import ('./Authentication/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: "signUp",
    loadChildren: () => import("./Authentication/sign-up/sign-up.module").then(m=>m.SignUpModule)
  },
  
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m=>m.AdminModule)
  },

  {
    path: "recover-password",
    loadChildren: () => import("./Authentication/recover-password-component/recover-password-component.module").then(m=>m.RecoverPasswordComponentModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
