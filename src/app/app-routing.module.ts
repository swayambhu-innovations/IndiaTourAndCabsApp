import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start-screen',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },{
    path: 'start-screen',
    loadChildren: () => import('./pages/start-screen/start-screen.module').then( m => m.StartScreenPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'outstation',
    loadChildren: () => import('./pages/outstation/outstation/outstation.module').then( m => m.OutstationPageModule)
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./pages/outstation/vehicle/vehicle.module').then( m => m.VehiclePageModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./pages/outstation/billing/billing.module').then( m => m.BillingPageModule)
  },
  {
    path: 'renting',
    loadChildren: () => import('./pages/renting/renting/renting.module').then( m => m.RentingPageModule)
  },
  {
    path: 'renting-vehicle',
    loadChildren: () => import('./pages/renting/renting-vehicle/renting-vehicle.module').then( m => m.RentingVehiclePageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./pages/renting/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'book-a-guide',
    loadChildren: () => import('./pages/book-a-guide/book-a-guide.module').then( m => m.BookAGuidePageModule)
  },
  
 



 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
