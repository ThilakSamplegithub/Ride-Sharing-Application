import React, { useEffect, useState } from "react";
import styles from "../Styles/driverPage.module.css"
import { useDispatch } from "react-redux";
import ConfirmTable from "../Components/ConfirmTable";
import MapComponent from "../Components/MapComponent";
const DriverPage = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}driver/locations/${localStorage.getItem("driverId")}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("driver_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.passengers);
        setPassengers(res.passengers);
      })
      .catch((err) => console.log(err.message, "is error"));
  }, []);
  return (
    <div>
      <MapComponent />
      <div className={styles.tableContainer}>
      <table>
        <caption>Requests by Passengers</caption>
        <thead>
          <th>S.No</th>
          <th>Passenger name</th>
          <th>phoneNumber</th>
          <th>confirmation</th>
        </thead>
        <tbody>
          {passengers
            ?.filter((el) => el.request === true)
            ?.map((el, i) => (
              <ConfirmTable key={i} i={i} {...el} />
            ))}
        </tbody>
      </table></div>
    </div>
  );
};

export default DriverPage;
