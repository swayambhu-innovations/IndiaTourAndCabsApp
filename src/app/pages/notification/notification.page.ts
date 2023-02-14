import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
Notifications = [

    {
      id: 1,
      title: 'Order #1234',
      description: ' Your taxi booking has been cancelled. We apologize for any inconvenience caused. Thank you for using our service',
      date: '12/12/2020',
      time: '12:00 PM',
    },
    {
      id: 1,
      title: 'Your Taxi booking is confirmed!',
      description: ' Your taxi booking has been cancelled. We apologize for any inconvenience caused. Thank you for using our service',
      date: '12/12/2020',
      time: '11:00 PM',
    },
    {
      id: 1,
      title: 'Taxi Booking Cancelled',
      description: ' Your taxi booking has been cancelled. We apologize for any inconvenience caused. Thank you for using our service',
      date: '12/12/2020',
      time: '1:00 AM',
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
