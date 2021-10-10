import React from "react";
import "../../App.css";
// import { Formik, Form, Field } from "formik";

const Droparea = () => {
  const dropElement = (e) => {
    const id = e.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    const dropzone = e.target;

    if (draggableElement) {
      document.getElementById("droparea_desc").style.visibility = "hidden";
      draggableElement = draggableElement.cloneNode(true);

      switch (draggableElement.id) {
        case "widget1":
          {
            var tAdiv = document.createElement("div");
            tAdiv.setAttribute("id", "tAdiv");
            var textarea = document.createElement("textarea");
            textarea.setAttribute("id", "tA");
            var tAlabel = prompt("Type Label");
            var tA_Label = document.createElement("label");
            tA_Label.innerHTML = `${tAlabel}`;
            tA_Label.id = "tAlabel";
            tAdiv.appendChild(tA_Label);
            tAdiv.appendChild(textarea);
            dropzone.appendChild(tAdiv);
          }
          break;
        case "widget2":
          {
            var cntdiv = document.createElement("div");
            cntdiv.setAttribute("id", "cntdiv");
            var counter = document.createElement("input");
            counter.type = "number";
            counter.setAttribute("id", "cnt");
            var cntlabel = prompt("Type Label");
            var cnt_Label = document.createElement("label");
            cnt_Label.innerHTML = `${cntlabel}`;
            cnt_Label.id = "cntlabel";
            cntdiv.appendChild(cnt_Label);
            cntdiv.appendChild(counter);
            dropzone.appendChild(cntdiv);
          }
          break;
        case "widget3":
          {
            var cbdiv = document.createElement("div");
            cbdiv.setAttribute("id", "cbdiv");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("id", "cb");
            var cblabel = prompt("Type Label");
            var cb_Label = document.createElement("label");
            cb_Label.innerHTML = `${cblabel}`;
            cb_Label.id = "cblabel";
            cbdiv.appendChild(cb_Label);

            cbdiv.appendChild(checkbox);
            dropzone.appendChild(cbdiv);
          }
          break;
        case "widget4":
          {
            var dropdowndiv = document.createElement("div");
            dropdowndiv.setAttribute("id", "ddiv");
            var dropdown = document.createElement("select");
            var option = new Option("option1", "value", false, false);
            dropdown.appendChild(option);
            var ddlabel = prompt("Type Label");
            var dd_Label = document.createElement("label");
            dd_Label.innerHTML = `${ddlabel}`;
            dd_Label.id = "dropdownlabel";
            dropdowndiv.appendChild(dd_Label);

            dropdowndiv.appendChild(dropdown);
            dropzone.appendChild(dropdowndiv);
          }
          break;
        case "widget5":
          {
            var datediv = document.createElement("div");
            datediv.setAttribute("id", "dtdiv");
            var date = document.createElement("input");
            date.type = "date";
            datediv.appendChild(date);
            dropzone.appendChild(datediv);
          }
          break;
        default: {
        }
      }
    }

    e.dataTransfer.clearData();
  };

  const handleSubmit = (e) => {
    // console.log(document.getElementById("my_form"));
    // console.log(document.getElementById("droparea").innerHTML);
    const data = {
      formData: document.getElementById("droparea").innerHTML,
    };
    console.log(e);
    const json_data = JSON.stringify(data);
    localStorage.setItem("added", json_data);
    console.log(JSON.parse(json_data).formData);

    document.getElementById("droparea").innerHTML =
      JSON.parse(json_data).formData;

    e.preventDefault();
  };

  return (
    <div id="droparea">
      <form id="my_form">
        <div id="droparea_desc">Drag &amp; Drop to create a component</div>
        <section
          id="droparea__main"
          className="droparea__main"
          onDragOver={(e) => e.preventDefault()}
          onDrop={dropElement}
        ></section>
        <div className="submit__flex">
          <button
            type="button"
            className="btn btn-primary submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
// console.log(JSON.stringify(document.getElementById("droparea__main")));

export default Droparea;
