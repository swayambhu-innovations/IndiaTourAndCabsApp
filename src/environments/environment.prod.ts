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
  production: true,
  cloudFunctions : {
    createOrder: 'https://us-central1-indiatoursandcabs.cloudfunctions.net/createOrder',
    capturePayment: 'https://us-central1-indiatoursandcabs.cloudfunctions.net/capturePayments',
    createSubscription: 'http://localhost:5001/iskcon-7feba/us-central1/createSubscription',
    verifySubscription:'http://localhost:5001/iskcon-7feba/us-central1/verifySubscription',
    checkSubscriptionStatus:'http://localhost:5001/iskcon-7feba/us-central1/checkSubscriptionStatus',
  },
  RAZORPAY_KEY_ID: 'rzp_test_8cTBlk022y2EDq',
};
