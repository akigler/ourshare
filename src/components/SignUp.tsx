// components/Submit.js
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/SignUp.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(formData);
    e.preventDefault();

    // Perform basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submission was successful
        console.log("Form submitted successfully!");
        // Clear the form after submission
        setFormData({
          email: "",
        });
      } else {
        console.log("Form submission failed!");
      }
    } catch (error) {
      console.log("Form submission error:", error);
    }
  };

  return (
    <section id="signup">
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formRow}>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="^\S+@\S+\.\S+$"
              title="Please enter a valid email address."
              className={styles.emailInput}
              placeholder="Email"
            />
          </div>
          <div>
            <button type="submit" className={styles.formButton}>
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
