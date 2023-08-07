import React from "react";
import styles from "../styles/SignUpButton.module.css";

interface SignUpButtonProps {
  onClick: () => void;
}

const SignUpButton: React.FC<SignUpButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.signUpButton} onClick={onClick}>
      Sign Up
    </button>
  );
};

export default SignUpButton;
