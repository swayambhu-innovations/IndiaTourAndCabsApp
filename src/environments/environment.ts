// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'indiatoursandcabs',
    appId: '1:433563285733:web:fe69f3113203a220f63c0c',
    storageBucket: 'indiatoursandcabs.appspot.com',
    apiKey: 'AIzaSyCI7GQn_IAiYInnQQxZtT79DwGwHCfv040',
    authDomain: 'indiatoursandcabs.firebaseapp.com',
    messagingSenderId: '433563285733',
    measurementId: 'G-7C7G34ZFC7',
  },
  production: false,
  cloudFunctions : {
    createOrder: 'http://localhost:5001/indiatoursandcabs/us-central1/createOrder',
    capturePayment: 'http://localhost:5001/indiatoursandcabs/us-central1/capturePayments',
    createSubscription: 'http://localhost:5001/indiatoursandcabs/us-central1/createSubscription',
    verifySubscription:'http://localhost:5001/indiatoursandcabs/us-central1/verifySubscription',
    checkSubscriptionStatus:'http://localhost:5001/indiatoursandcabs/us-central1/checkSubscriptionStatus',
  },
  RAZORPAY_KEY_ID: 'rzp_test_8cTBlk022y2EDq',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
