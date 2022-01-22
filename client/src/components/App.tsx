import React from "react";
import { typedSelector } from "../lib/hooks/useSelector";
import { Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Contact from "./Contact/Contact";
import Header from "./Header";
import Dashboard from "./Dashboard";

// The App component is responsible for routing different components
// I have used react router version 5.0 for routing purpose
// If authenticated the home page will be the dashboard
// If not authenticated the home page will be Sign Up
const App: React.FC = () => {
  const auth = typedSelector((state) => state.auth);

  let authenticated = auth.authenticated;
  if (!authenticated) {
    return (
      <>
        <Route path="/" exact component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </>
    );
  }
  return (
    <div>
      <Header />
      <Route path="/" exact component={Dashboard} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};

export default App;
