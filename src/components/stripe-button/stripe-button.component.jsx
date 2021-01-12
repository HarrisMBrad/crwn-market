import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
      // price in cents for stripe.
      const priceForStripe = price * 100;
      const publishableKey = 'pk_test_51I8p3IB96hStgBMY1STL8eA7dbPk3SZZwJ1eTjjrElad30xag1r3FNF745jHn7xEy7gbvnaMDJqLe6aBD3XyxxkG004mWsI4O6';

      const onToken = token => {
            console.log(token);
            alert('Payment Successful');
      }

      return (
            <StripeCheckout
                  label='Pay Now'
                  name='CRWN-MARKET Ltd.'
                  billingAddress
                  shippingAddress
                  image='https://svgshare.com/i/CUz.svg'
                  description={`Your total is $${price}`}
                  amount={priceForStripe}
                  panelLabel='Pay Now'
                  token={onToken}
                  stripeKey={publishableKey}
                  
            />
      );
};

export default StripeCheckoutButton;
