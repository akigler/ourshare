import React from "react";

const SignUp = () => {
  return (
    <section id="signup" className="my-8">
      <h2>Sign Up to Learn More</h2>
      {/* Add your sign-up form here */}
      <form>
        <div className="my-2">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="my-2">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="my-2">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="my-2">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="py-2 px-4 bg-green-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
