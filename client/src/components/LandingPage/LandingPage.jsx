import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1 className="text-8xl py-8">Chat Now</h1>
      <p className="py-5">The comfy video chat application.</p>
      
      <Link to="/chat"><h1 className="btn">Chat Now</h1></Link>
    </div>
  );
}

export default LandingPage;
