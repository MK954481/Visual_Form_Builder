import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Droparea from "../Droparea/Droparea";
import "../../App.css";

const Builder = () => {
  const handleClick = (e) => {
    const data = localStorage.getItem("added");
    document.getElementById("droparea").innerHTML = JSON.parse(data).formData;
    e.preventDefault();
  };

  return (
    <section id="main__wrapper">
      <button
        type="button"
        className="btn btn-primary"
        style={{ marginTop: "8px" }}
        onClick={handleClick}
      >
        Previous Layouts
      </button>
      <div id="main__container">
        <Sidebar />
        <Droparea />
      </div>
    </section>
  );
};

export default Builder;
