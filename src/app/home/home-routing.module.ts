import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'homepage',
        loadChildren: () =>
          import('../pages/homepage/homepage.module').then(
            (m) => m.HomepagePageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../pages/orders/orders.module').then(
            (m) => m.OrdersPageModule
          ),
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('../pages/wallet/wallet.module').then(
            (m) => m.WalletPageModule
          ),
      },{
        path:'',
        redirectTo:'homepage',
        pathMatch:'full'
      },{
        path:'notifications',
        loadChildren: () =>
          import('../pages/notification/notification.module').then(
            (m) => m.NotificationPageModule
          ),
      }
    ],
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
