import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
