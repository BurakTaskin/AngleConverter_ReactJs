import React, { useEffect, useState } from "react";
import { rates, units } from "./enums";
import { useAngleState } from "./hooks";
import "./styles.css";
import Angle from './Angle';

export default function App() {

  return (
    <Angle/>
  );
}
