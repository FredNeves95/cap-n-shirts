import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { AUTHENTICATION_ROUTES } from "../../utils/constants";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { getRoute } from "../../utils/functions";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const defaultSignInForm = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const { cartItems } = useContext(CartContext);
  const [signInForm, setSignInForm] = useState(defaultSignInForm);
  const navigate = useNavigate();
  const { email, password } = signInForm;

  const resetSignInForm = () => setSignInForm(defaultSignInForm);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetSignInForm();
      const route = getRoute(cartItems, AUTHENTICATION_ROUTES);
      navigate(route);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInForm({ ...signInForm, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    const route = getRoute(cartItems, AUTHENTICATION_ROUTES);
    navigate(route);
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
