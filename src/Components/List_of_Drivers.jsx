import React, { useState } from 'react'
import { Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const List_of_Drivers = ({name,phoneNumber,carModel,location,email,i}) => {
    const [action,setAction]=useState(false)
    const navigate=useNavigate()
  return (
    <tr>
                      <td data-cell='name'>{name}</td>
                      <td data-cell='phoneNumber'>{phoneNumber}</td>
                      <td data-cell='carModel'>{carModel}</td>
                      <td data-cell='location'>{location}</td>
                      <td data-cell='email'>{email}</td>
                      <td data-cell='price'>300</td>
                      <td data-cell='action'><Button
                        style={{
                          border: "none",
                          borderRadius: "3px",
                          backgroundColor: "greenyellow",
                          height: "20px",
                        }}
                        size="sm"
                        onClick={() =>{setAction('confirmed');setTimeout(()=>navigate("/driverLogin"),2000)}}
                      >
                        {action?<svg
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
          </svg>:'confirm'}
                      </Button></td>
                    </tr>
  )
}

export default List_of_Drivers
