import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootPage } from './root.page';

const routes: Routes = [
  {
    path: '',
    component: RootPage,
    children:[
      {
        path: 'start-screen',
        loadChildren: () => import('./start-screen/start-screen.module').then( m => m.StartScreenPageModule),
      },
      {
        path: 'outstation',
        loadChildren: () => import('./outstation/outstation/outstation.module').then( m => m.OutstationPageModule)
      },
      {
        path: 'vehicle',
        loadChildren: () => import('./outstation/vehicle/vehicle.module').then( m => m.VehiclePageModule)
      },
      {
        path: 'billing',
        loadChildren: () => import('./outstation/billing/billing.module').then( m => m.BillingPageModule)
      },
      {
        path: 'renting',
        loadChildren: () => import('./renting/renting/renting.module').then( m => m.RentingPageModule)
      },
      {
        path: 'renting-vehicle',
        loadChildren: () => import('./renting/renting-vehicle/renting-vehicle.module').then( m => m.RentingVehiclePageModule)
      },
      {
        path: 'payment-method',
        loadChildren: () => import('./renting/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
      },
      {
        path: 'book-a-guide',
        loadChildren: () => import('./book-a-guide/book-a-guide.module').then( m => m.BookAGuidePageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog/blog.module').then( m => m.BlogPageModule)
      },
      {
        path: 'blog-detail',
        loadChildren: () => import('./blog/blog-detail/blog-detail.module').then( m => m.BlogDetailPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'waiting',
        loadChildren: () => import('./waiting-pages/waiting/waiting.module').then( m => m.WaitingPageModule)
      },
      {
        path: 'confirm-booking',
        loadChildren: () => import('./waiting-pages/confirm-booking/confirm-booking.module').then( m => m.ConfirmBookingPageModule)
      },
      {
        path: 'cancell-booking',
        loadChildren: () => import('./waiting-pages/cancell-booking/cancell-booking.module').then( m => m.CancellBookingPageModule)
      },
      {
        path: 'tours',
        loadChildren: () => import('./tours/tours/tours.module').then( m => m.ToursPageModule)
      },
      {
        path: 'tours-details',
        loadChildren: () => import('./tours/tour-detail/tour-detail.module').then( m => m.TourDetailPageModule) 
      },
      {
        path: 'tours-billing',
        loadChildren: () => import('./tours/tour-billing/tour-billing.module').then( m => m.TourBillingPageModule) 
      },
      {
        path: 'spot-detail',
        loadChildren: () => import('./spots/spot-detail/spot-detail.module').then( m => m.SpotDetailPageModule)
      },
      {
        path: 'spot-review',
        loadChildren: () => import('./spots/spot-review/spot-review.module').then( m => m.SpotReviewPageModule)
      },
      {
        path: 'itenary',
        loadChildren: () => import('./tours/itenary/itenary.module').then( m => m.ItenaryPageModule)
      },
      {
        path: 'tour-review',
        loadChildren: () => import('./tours/tour-review/tour-review.module').then( m => m.TourReviewPageModule)
      },
      {
        path: 'booking-details',
        loadChildren: () => import('./booking-details/booking-details/booking-details.module').then( m => m.BookingDetailsPageModule)
      },
      {
        path: 'booking-extented',
        loadChildren: () => import('./booking-details/booking-extented/booking-extented.module').then( m => m.BookingExtentedPageModule)
      },
      {
        path: 'rating',
        loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
      },{
        path:'homepage',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepagePageModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./orders/orders.module').then(
            (m) => m.OrdersPageModule
          ),
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./wallet/wallet.module').then(
            (m) => m.WalletPageModule
          ),
      },
      {
        path:'notifications',
        loadChildren: () =>
          import('./notification/notification.module').then(
            (m) => m.NotificationPageModule
          ),
      },
      {
        path: 'book-ride',
        loadChildren: () => import('./book-ride/book-ride.module').then( m => m.BookRidePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootPageRoutingModule {}
