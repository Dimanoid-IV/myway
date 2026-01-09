import { loadStripe } from '@stripe/stripe-js';

// Replace with your Stripe publishable key
const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_YOUR_KEY_HERE';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

// Create checkout session
export const createCheckoutSession = async (ticketType, price) => {
  try {
    // In production, this should call your backend API
    // For now, we'll use Stripe Payment Links
    
    // Map ticket types to Stripe Payment Link URLs
    // You need to create these Payment Links in your Stripe Dashboard
    const paymentLinks = {
      'Economy Orbit': import.meta.env.VITE_STRIPE_LINK_ECONOMY || 'https://buy.stripe.com/test_YOUR_LINK_1',
      'Business Galaxy': import.meta.env.VITE_STRIPE_LINK_BUSINESS || 'https://buy.stripe.com/test_YOUR_LINK_2',
      'Alien VIP': import.meta.env.VITE_STRIPE_LINK_VIP || 'https://buy.stripe.com/test_YOUR_LINK_3',
      'One-Way Ticket': import.meta.env.VITE_STRIPE_LINK_ONEWAY || 'https://buy.stripe.com/test_YOUR_LINK_4',
    };

    const paymentLink = paymentLinks[ticketType];
    
    if (paymentLink) {
      // Open payment link in new tab
      window.open(paymentLink, '_blank');
      return { success: true };
    } else {
      throw new Error('Payment link not configured for this ticket type');
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return { success: false, error: error.message };
  }
};

// Alternative: Create dynamic checkout session (requires backend)
export const createDynamicCheckout = async (ticketType, price) => {
  try {
    // Call your backend API to create a checkout session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ticketType,
        price,
      }),
    });

    const { sessionId, error } = await response.json();
    
    if (error) {
      throw new Error(error);
    }

    // Redirect to Stripe Checkout
    const stripe = await getStripe();
    const { error: stripeError } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (stripeError) {
      throw stripeError;
    }

    return { success: true };
  } catch (error) {
    console.error('Error creating dynamic checkout:', error);
    return { success: false, error: error.message };
  }
};

export default getStripe;
