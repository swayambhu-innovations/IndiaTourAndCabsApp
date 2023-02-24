import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },{
    path: 'start-screen',
    loadChildren: () => import('./pages/start-screen/start-screen.module').then( m => m.StartScreenPageModule),
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
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'blog-detail',
    loadChildren: () => import('./pages/blog/blog-detail/blog-detail.module').then( m => m.BlogDetailPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'waiting',
    loadChildren: () => import('./pages/waiting-pages/waiting/waiting.module').then( m => m.WaitingPageModule)
  },
  {
    path: 'confirm-booking',
    loadChildren: () => import('./pages/waiting-pages/confirm-booking/confirm-booking.module').then( m => m.ConfirmBookingPageModule)
  },
  
  {
    path: 'cancell-booking',
    loadChildren: () => import('./pages/waiting-pages/cancell-booking/cancell-booking.module').then( m => m.CancellBookingPageModule)
  },
  {
    path: 'tours',
    loadChildren: () => import('./pages/tours/tours/tours.module').then( m => m.ToursPageModule)
  },
  {
    path: 'tours-details',
    loadChildren: () => import('./pages/tours/tour-detail/tour-detail.module').then( m => m.TourDetailPageModule) 
  },
  {
    path: 'tours-billing',
    loadChildren: () => import('./pages/tours/tour-billing/tour-billing.module').then( m => m.TourBillingPageModule) 
  },
  {
    path: 'spot-detail',
    loadChildren: () => import('./pages/spots/spot-detail/spot-detail.module').then( m => m.SpotDetailPageModule)
  },
  {
    path: 'spot-review',
    loadChildren: () => import('./pages/spots/spot-review/spot-review.module').then( m => m.SpotReviewPageModule)
  },
  {
    path: 'itenary',
    loadChildren: () => import('./pages/tours/itenary/itenary.module').then( m => m.ItenaryPageModule)
  },
  {
    path: 'tour-review',
    loadChildren: () => import('./pages/tours/tour-review/tour-review.module').then( m => m.TourReviewPageModule)
  },
  {
    path: 'booking-details',
    loadChildren: () => import('./pages/booking-details/booking-details/booking-details.module').then( m => m.BookingDetailsPageModule)
  },
  {
    path: 'booking-extented',
    loadChildren: () => import('./pages/booking-details/booking-extented/booking-extented.module').then( m => m.BookingExtentedPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./pages/rating/rating.module').then( m => m.RatingPageModule)
  },{
    path:'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then(
        (m) => m.OrdersPageModule
      ),
  },
  {
    path: 'wallet',
    loadChildren: () =>
      import('./pages/wallet/wallet.module').then(
        (m) => m.WalletPageModule
      ),
  },{
    path:'',
    redirectTo:'homepage',
    pathMatch:'full'
  },{
    path:'notifications',
    loadChildren: () =>
      import('./pages/notification/notification.module').then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: 'book-ride',
    loadChildren: () => import('./pages/book-ride/book-ride.module').then( m => m.BookRidePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing:true },)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
