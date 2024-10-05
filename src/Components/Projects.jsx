import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="mt-24 bg-zinc-800 pt-6 pb-11 rounded-md">
        <h1 className="text-center text-5xl font-bold text-white">Pʀoᴊᴇcᴛs</h1>
      <div className="wrap">
        <div className="tile">
          <img src="/images/image.png"/>
          <div className="text">
            <h2 className="animate-text text-slate-900">Provide Information</h2>
            <p className="animate-text text-slate-900">
              The main motive of this innovatrix is to provide information each and everything if you say "Open Google" It automatically open Google.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src="/images/image2.png" />
          <div className="text">
            <h2 className="animate-text text-gray-950">Ordering Food Item</h2>
            <p className="animate-text text-slate-900">
              This clone will only for showing all the food item. You can't order any Dishes.This is only UI design which is fully responsive.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src="/images/image3.png" />
          <div className="text">
            <h2 className="animate-text text-slate-900">Analyse the Data of any Website</h2>
            <p className="animate-text text-slate-900">
              This project will help you to analyse your website analyser and can check what bugs or error has came in your website and can check all the data{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
