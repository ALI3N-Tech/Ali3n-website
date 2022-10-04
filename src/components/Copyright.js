import React, { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import "./Copyright.css";

function Copyright() {
  return (
    <div className="copyRight">
      <span>
        <FaRegCopyright />
      </span>
      <p>
        {new Date().getFullYear()} <span> Ali3n</span>.
      </p>
      <p>
        All Rights Reserved By <span>Ali3n Tech</span>
      </p>
    </div>
  );
}

export default Copyright;
