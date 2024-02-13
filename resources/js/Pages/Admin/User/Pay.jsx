import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

  
const CheckoutForm = () => {
    const stripe = useStripe();
    // const { presentPaymentSheet, initPaymentSheet } = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (elements == null) {
            return;
        }
        
        const {error: submitError} = await elements.submit();
        if (submitError) {
            setErrorMessage(submitError.message);
            return;
        }
        
        // const res = await fetch('/create-intent', {
        //     method: 'POST',
        // });
        const res = await fetch('https://api.stripe.com/v1/create-intent', {
            method: 'POST',
        });

        console.log(res);
        // const {client_secret: clientSecret} = await res.json();
        // console.log("lola", client_secret);
        
        const {error} = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'https://example.com/order/123/complete',
            },
        });
  
        if (error) {
            setErrorMessage(error.message);
        } else {
            console.log("lola");
        }
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type="submit" disabled={!stripe || !elements}>Pay</button>
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    )
}
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    appearance: {
        
    },
}

export default function Pay() {
    const [open, setOpen] = React.useState(false);
    const [customerId, setCustomerId] = React.useState(false);
    const [ephemeralKey, setEphemeralKey] = React.useState(false);
    const [clientSecret, setClientSecret] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const getPaymentIntent = async (customerId, ephemeralKey) => {
        try {
          // setLoading(true)
            const response = await fetch(
                `https://api.stripe.com/v1/payment_intents?customer=${customerId}&amount=9999&currency=inr&automatic_payment_methods[enabled]=true`,
                {
                method: "POST",
                headers: {
                    Authorization: `Bearer sk_test_51ObmjuSBPahoUJ2eMHHTRnYAiDYqRFrhtyInkXBlZnhLJErpZOiD6muvKHiCpWbAMiPik7CtjgBzvk9jILFa85vx00Xrfkh93O`,
                    
                },
                }
            );
    
          const data = await response.json();
    
          console.log(data.client_secret, "sdghndbsd");
          handlePaymentFlow(data.client_secret);
          // setLoading(false)
          setClientSecret(data.client_secret);
    
          console.warn("client_secret id", data.client_secret);
    
          pricce = null;
        } catch (error) {
          console.error("Error getting payment intent", error);
        }
    }

    // const getEphemeralKey = async (customerId) => {
    //     try {
    //     const response = await fetch(`https://api.stripe.com/v1/ephemeral_keys?customer=${customerId}`, {
    //         method: 'POST',
    //         headers: {
    //           Authorization: `Bearer sk_test_51ObmjuSBPahoUJ2eMHHTRnYAiDYqRFrhtyInkXBlZnhLJErpZOiD6muvKHiCpWbAMiPik7CtjgBzvk9jILFa85vx00Xrfkh93O`,
    //           'Stripe-Version': '2023-10-16',
    //         },
    //     });
    //     const data = await response.json();
    //     console.log(data,"cggfcgfcgfcg");
    //     setEphemeralKey(data.id);
    //     getPaymentIntent(customerId, data.id);
    //     console.warn('customer id',customerId)
    //     console.warn('setEphemeralKey id',data.id)
    
    //     } catch (error) {
    //       console.error('Error getting ephemeral key', error);
    //     }
    // }

    const getCustomerId = async () => {
        try {
            const response = await fetch('https://api.stripe.com/v1/customers', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer sk_test_51ObmjuSBPahoUJ2eMHHTRnYAiDYqRFrhtyInkXBlZnhLJErpZOiD6muvKHiCpWbAMiPik7CtjgBzvk9jILFa85vx00Xrfkh93O',
                },
            });
            const data = await response.json();
            console.log(data,":::data");
            setCustomerId(data.id);
            // getEphemeralKey(data.id);
            getPaymentIntent(data.id);
            console.warn('customer id',data.id)
        } catch (error) {
          console.error('Error getting customer ID', error);
        }
    }

    const handlePaymentFlow = async (clientSecret2) => {
        //   console.log(clientSecret2,customerId,ephemeralKey,'cvdsvvs')
        try {
          if (clientSecret2) {
            // Call the presentPaymentSheet function with the necessary parameters
    
            // const { error, PaymentSheet } = await initPaymentSheet({
            //     // clientSecret2,
            //     customer: customerId,
            //     // ephemeralKey,
            //     merchantDisplayName: "Vijay",
            //     paymentIntentClientSecret: clientSecret2,
            //     customerEphemeralKeySecret: clientSecret2,
            //     allowsDelayedPaymentMethods: true,
            //     defaultBillingDetails: {
            //         name: "Jane Doe",
            //     },
            //     merchantCountryCode: "FR",
            //     // google pay conf
            //     googlePay: true,
            // });
    
            console.log(PaymentSheet);
    
            if (error) {
              console.error("Error presenting Payment Sheet:", error);
            } else {
              // setLoading(false)
              // openPaymentSheet()
              const { error, PaymentSheet } = await presentPaymentSheet();
              console.log(error, PaymentSheet);
    
              if (!error) Alert.alert("", "Payment successfully");
              // Handle success if needed
            }
          } else {
            // setLoading(false)
            console.error("One or more required variables are not initialized");
            console.log("clientSecret:", clientSecret);
            console.log("customerId:", customerId);
            console.log("ephemeralKey:", ephemeralKey);
          }
        } catch (error) {
          // setLoading(false)
          console.error("Error in handlePaymentFlow:", error);
        }
    }

    React.useEffect(() => {
        getCustomerId();
    },[])

  return (
    <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
            Open dialog
        </Button>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Modal title
        </DialogTitle>
        <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
        >
            <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleClose}>
                Save changes
            </Button>
        </DialogActions>
        </BootstrapDialog>
    </React.Fragment>
  );
}