import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./filter.css";
// import {useGlobalFilter, state} from 'react-table'
import data from "./data.js";


function Filter(props) {

  const {value, onChange} = props;

  const {staffId, dept, desig, latecomer, dayWise, dateRange} = value;
  const { onStaff, onDept, onDesig, onLatecomer, onDayWise, onDateRange} = onChange;

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="filter-btn">
        <button onClick={() => setToggle(!toggle)}>
          <span>Filter</span>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div> 
      {toggle && (
        <form id="form">
          <div className="row-1">
            <div className="inputgrp">
              <label htmlFor="dept">Department</label>
              <input type="text" value={dept} onChange={e => onDept(e.target.value)} list="dept"></input>
              <datalist id="dept">
                <option value={"CSE"}>CSE</option>
                <option value={"EEE"}>EEE</option>
                <option value={"ECE"}>ECE</option>
              </datalist>
            </div>
            <div className="inputgrp">
              <label htmlFor="desg">Designation</label>
              <input type="text" value={desig} onChange={e => onDesig(e.target.value)} list="desig"></input>
              <datalist id="desig">
                <option value={"Assistant Prof"}>Assistant Prof</option>
                <option value={"Prof"}>Prof</option>
                <option value={"Non Teaching"}>Non Teaching</option>
              </datalist>
            </div>
            <div className="inputgrp">
              <label htmlFor="staffID">StaffID</label>
              <input type="text" id="myInput" value={staffId} onChange={e => onStaff(e.target.value)}
              ></input>
            </div>
            <div className="late">
              <label htmlFor="latecomer">
                <input value={latecomer} onChange={e => onLatecomer(e.target.checked)} type="checkbox" id="latecomer"></input>
                Latecomer
              </label>
            </div>
          </div>
          <div className="row-2">
            <div className="date">
              <label>
                <input type="checkbox" value={dayWise.checked} onChange={(e) =>  onDayWise({...dayWise, checked: e.target.checked}) }></input>
                Daywise
              </label>
            </div>
            {dayWise.checked && (
              <div className="date-1">
                <DatePicker
                // value={sdate} onChange={e => onsdate(e.target.value)}
                  selected={dayWise.date}
                  onChange={(date) => onDayWise({...dayWise, date: date})}
                  dateFormat="MM/dd/yyyy"
                />
              </div>
            )}
            <div className="daterange">
              <label>
                <input
                  type="checkbox"
                  value={dateRange.checked}
                  onChange={(e) => onDateRange({...dateRange, checked: e.target.checked})}
                ></input>
                Range of dates
              </label>
            </div>
            {dateRange.checked && (
              <div className="date-2">
                <DatePicker
                  selected={dateRange.startDate}
                  onChange={(dates) => onDateRange({...dateRange, startDate: dates[0], endDate: dates[1]})}
                  selectsRange
                  startDate={dateRange.startDate}
                  endDate={dateRange.endDate}
                  dateFormat="dd/MM/yyyy"
                />
              
              </div>
            )}
          </div>
        </form>
      )}
    </>
  );
}

export default Filter;
