import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// The email link-based verification flow has been replaced by an in-form
// OTP flow on the Signup page. Anyone who lands here is redirected to /signup.
export default function VerifyEmail() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signup", { replace: true });
  }, [navigate]);

  return null;
}
