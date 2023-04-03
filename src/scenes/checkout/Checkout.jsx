import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = []

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useState((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (value, actions) => {
    setActiveStep(activeStep + 1)
  };

  async function makePayment(value) {

  };

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m:"20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={}
        >

        </Formik>
      </Box>
    </Box>
  )
}

export default Checkout