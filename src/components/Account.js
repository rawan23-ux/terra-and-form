import { useState } from "react";
import "../styles/Account.css";

function Account() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState("");
  function switchForm() {
    setIsSignUp(!isSignUp);
    setMessage("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      isSignUp
        ? "Sign-up form complete. Account creation is coming soon."
        : "Login form complete. Account verification is coming soon."
    );
  }
  return (
    <main className="account-page">
      <h1>{isSignUp ? "Create an account" : "Log in"}</h1>

      <form key={isSignUp ? "signup" : "login"} onSubmit={handleSubmit}>
        {isSignUp && (
          <p>
            <label htmlFor="name">Name</label>
            <br />
            <input id="name" name="name" autoComplete="name" required />
          </p>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={isSignUp ? "new-password" : "current-password"}
            required
          />
        </p>
        <button type="submit">
          {isSignUp ? "Create account" : "Log in"}
        </button>
      </form>
      <p role="status">{message}</p>
      <p>
        {isSignUp ? "Already have an account? " : "New to Terra & Form? "}
        <button type="button" onClick={switchForm}>
          {isSignUp ? "Log in" : "Create account"}
        </button>
      </p>
    </main>
  );
}

export default Account;