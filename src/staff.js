import { useState, useMemo } from "react";
import data from "./data";
import "./home.css";
import Filter from "./filter";

function Staff() {
  const [staff, setStaff] = useState(data);
  const [staffId, setStaffId] = useState("");
  const [dept, setDept] = useState("");
  const [desig, setDesig] = useState("");
  const [latecomer, setLatecomer] = useState(false);
  const [dayWise, setDayWise] = useState({ checked: false, date: null });
  const [dateRange, setDateRange] = useState({
    checked: false,
    startDate: null,
    endDate: null,
  });

  const compareTime = (date1, date2) => {
    date1.setFullYear(2020, 8, 9);
    date2.setFullYear(2020, 8, 9);
    return date1.getTime() - date2.getTime();
  };

  const compareDate = (date1, date2) => {
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);
    return date1.getTime() - date2.getTime();
  };

  const filterFunction = (
    staffId,
    dept,
    desig,
    latecomer,
    dayWise,
    dateRange
  ) => {
    const latecomerDate = new Date("October 9, 2020 8:45:00");
    return (individualData) => {
      return !!(
        (!staffId ||
          individualData.staffID
            .toLowerCase()
            .startsWith(staffId.toLowerCase())) &&
        (!dept ||
          individualData.department
            .toLowerCase()
            .startsWith(dept.toLowerCase())) &&
        (!desig ||
          individualData.designation
            .toLowerCase()
            .startsWith(desig.toLowerCase())) &&
        (!latecomer ||
          compareTime(new Date(individualData.inTime), latecomerDate) >= 0) &&
        (!dayWise.checked ||
          !dayWise.date ||
          compareDate(dayWise.date, new Date(individualData.date)) === 0) &&
        (!dateRange.checked ||
          !dateRange.startDate ||
          !dateRange.endDate ||
          (compareDate(dateRange.startDate, new Date(individualData.date)) <=
            0 &&
            compareDate(dateRange.endDate, new Date(individualData.date)) >= 0))
      );
    };
  };
  const filteredData = useMemo(() => {
    const currentFilter = filterFunction(
      staffId,
      dept,
      desig,
      latecomer,
      dayWise,
      dateRange
    );
    return staff.filter(currentFilter).map((d) => {
      return {
        ...d,
        inTime: new Date(d.inTime).toLocaleTimeString(),
        outTime: new Date(d.outTime).toLocaleTimeString(),
        date: new Date(d.date).toLocaleDateString(),
      };
    });
  }, [staffId, dept, desig, latecomer, dayWise, dateRange]);
  return (
    <div className="home">
      <h1>Attendance</h1>
      <Filter
        value={{
          staffId,
          dept,
          desig,
          latecomer,
          dayWise,
          dateRange,
        }}
        onChange={{
          onStaff: setStaffId,
          onDept: setDept,
          onDesig: setDesig,
          onLatecomer: setLatecomer,
          onDayWise: setDayWise,
          onDateRange: setDateRange,
        }}
      ></Filter>
      <div className="tablewrapper">
        <table className="attable" id="myTable">
          <tr className="athead" id="tr">
            <td>S.No</td>
            <td>Name</td>
            <td>Staff ID</td>
            <td>Designation</td>
            <td>Department</td>
            <td>Tutored</td>
            <td>DOB</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr className="atbody">
            <h4 className="day">Day 0</h4>
            {filteredData.map((item) => (
              <td className="atdata" key={item.sno}>
                <td data-label="S.No">{item.sno}</td>
                <td data-label="Name">{item.name}</td>
                <td data-label="Staff ID">{item.staffID}</td>
                <td data-label="Designation">{item.designation}</td>
                <td data-label="Department">{item.department}</td>
                <td data-label="Tutored">{item.tutored}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>X</button>
                </td>
              </td>
            ))}
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Staff;
