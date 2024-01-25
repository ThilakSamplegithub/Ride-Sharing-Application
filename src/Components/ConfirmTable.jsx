import React, { useState } from "react";

import styles from "../Styles/confirmTable.module.css"
import { useDispatch } from "react-redux";
import { handleStatus } from "../Redux/Rider/actions";
const ConfirmTable = ({ _id, name, phoneNumber, i, driverId, status }) =>{ 
  const [isChecked, setIsChecked] = useState(false);
  const [coloring,setColor]=useState(false)
  const id = String(_id);
  const driver_id=String(driverId)
  const dispatch = useDispatch()
  const toggleColor = () => {
    dispatch(handleStatus(id, { driverId:driver_id, status: true }))
    .then((res) => res.json())
    .then((res) => {console.log(res);
    if(!i%2){
      setColor('hsl(0 0% 0% / 0.1)')
    }else{
      setColor(null)
    }
    })
    .catch((err) => console.log(err.message));
    setIsChecked(!isChecked);
  };
  console.log(styles.tableBody,'is inside confirmTable')
  return (
    <tr className={styles.tableBody} >
           <td>{i + 1}</td>
      <td data-cell="name">{name}</td>
      <td data-cell="phoneNumber">{phoneNumber}</td>
      <td data-cell="confirmation" style={{cursor:"pointer"}} onClick={() => toggleColor()}>
        {isChecked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              stroke="green"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="9" fill="green" fill-opacity="0">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.2s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </circle>
              <path
                fill="none"
                stroke-dasharray="14"
                stroke-dashoffset="14"
                d="M8 12L11 15L16 10"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.2s"
                  values="14;0"
                />
              </path>
            </g>
          </svg>
        ) : (
          "confirm"
        )}
      </td>
    </tr>
    
  );
  }
;

export default ConfirmTable;
