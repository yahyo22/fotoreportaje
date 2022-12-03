import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function Kalendar() {
  const [value, setvelue] = useState(new Date());
  return (
    <div>
      <Calendar onChange={setvelue} value={value} />
    </div>
  );
}
