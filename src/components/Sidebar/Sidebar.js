import React from "react";
import {
  BsTextareaResize,
  BsCalendarDate,
  BsCheckSquare,
} from "react-icons/bs";
import { MdCountertops, MdOutlineArrowDropDownCircle } from "react-icons/md";
import "../../App.css";

const Sidebar = () => {
  const dragStart = (e) => e.dataTransfer.setData("text/plain", e.target.id);

  return (
    <div id="sidebar">
      <span id="sidebar__title">Sidebar</span>
      <div id="widgets">
        <div id="widget1" draggable="true" onDragStart={dragStart}>
          <span id="widget1__title">TextArea</span>
          <span id="widget1__icon">
            <BsTextareaResize />
          </span>
        </div>
        <div id="widget2" draggable="true" onDragStart={dragStart}>
          <span id="widget2__title">Counter</span>
          <span id="widget2__icon">
            <MdCountertops />
          </span>
        </div>
        <div id="widget3" draggable="true" onDragStart={dragStart}>
          <span id="widget3__title">CheckBox</span>
          <span id="widget3__icon">
            <BsCheckSquare />
          </span>
        </div>
        <div id="widget4" draggable="true" onDragStart={dragStart}>
          <span id="widget4__title">Dropdown</span>
          <span id="widget4__icon">
            <MdOutlineArrowDropDownCircle />
          </span>
        </div>
        <div id="widget5" draggable="true" onDragStart={dragStart}>
          <span id="widget5__title">Date</span>
          <span id="widget5__icon">
            <BsCalendarDate />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
