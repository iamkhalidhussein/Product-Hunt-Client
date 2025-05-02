import PaymentSuccess from '../components/UserPaymentSuccess/PaymentSuccess';
import PaymentFailed from '../components/UserPaymentFailed/PaymentFailed';
import PaymentCancel from '../components/UserPaymentCancel/PaymentCancel';

const paymentRoutes = [
  {
    path: 'paymentsuccess',
    element: <PaymentSuccess />,
  },
  {
    path: 'payment/failed',
    element: <PaymentFailed />,
  },
  {
    path: 'paymentcancel',
    element: <PaymentCancel />,
  },
];

export default paymentRoutes;