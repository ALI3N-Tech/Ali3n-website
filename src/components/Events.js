import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import Academy from "./Academy";
import Footer from "./Footer";

function Events() {
  return (
    <div className="eventsHead">
      <div className="topPart">
        <h3>Events</h3>
        <p>
          <Link to="/" className="link-s">
            Home{" "}
          </Link>
          / <span>Events</span>
        </p>
      </div>
      <Academy />
      <Footer />
    </div>
  );
}

export default Events;
