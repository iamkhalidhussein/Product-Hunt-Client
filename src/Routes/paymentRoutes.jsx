import PaymentSuccess from '../components/UserPaymentSuccess/PaymentSuccess';
import PaymentFailed from '../components/UserPaymentFailed/PaymentFailed';
import PaymentCancel from '../components/UserPaymentCancel/PaymentCancel';

const paymentRoutes = [
  {
    path: 'payment/success',
    element: <PaymentSuccess />,
  },
  {
    path: 'payment/failed',
    element: <PaymentFailed />,
  },
  {
    path: 'payment/cancel',
    element: <PaymentCancel />,
  },
];

export default paymentRoutes;