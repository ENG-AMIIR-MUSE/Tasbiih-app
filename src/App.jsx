import { Button, Datepicker, Label, Radio } from "flowbite-react";
import React, { useState } from "react";
import { DisplayData } from "./Components/DisplayData";

export default function App() {
  const [data, setData] = useState([
    {
      email: "amiir@example.com",
      username:'amiir Muse',
      birthDate: "2000-01-01",
      phone: "1234567890",
      address: "Yaqshid",
      country: "United States",
      gender: "male",
      userId:"User12",
      skills:['Marketing']
    },
    {
      email: "amir@example.com",
      birthDate: "1998-01-01",
      userId:"User7",
      username:"Mohamed ahed",
      phone: "1234567890",
      address: "Yaqshid",
      country: "United States",
      gender: "male",
      skills:['programing']
    },
    {
      email: "halimo@example.com",
      birthDate: "1996-01-01",
      userId:"User4",
      username:"Haliimo ahed",
      phone: "1234567890",
      address: "hoolwadaag",
      country: "United States",
      gender: "female",
      skills:['programing']
    },
    {
      email: "zaki@example.com",
      birthDate: "1999-01-01",
      userId:"User29",
      username:"zaki ahmed",
      phone: "1234567890",
      address: "seebiyaano",
      country: "United States",
      gender: "male",
      skills:['programing']
    },
  ]);
  return <DisplayData data={data} setData={setData} />;
}
