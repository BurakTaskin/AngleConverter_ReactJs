import React, { useEffect, useState } from "react";
import { rates, units } from "./enums";
import { useAngleState } from "./hooks";
import "./styles.css";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import Alert from '@material-ui/lab/Alert';

export default function Angle() {
  const [
    amount,
    converted,
    from,
    to,
    setAmount,
    setFrom,
    setTo,
    swapUnits
  ] = useAngleState();

  return (
    <div className="App">
      <Alert severity="info">EN - Designed and coded with Material UI using React.js | Burak Taşkın</Alert>
      <Alert severity="info">TR - Material UI ve React.js ile hazırlanmıştır | Burak Taşkın</Alert>
      <h1 id="h1Style">Angle Converter</h1>
      <span id="spanPadding"> Input : </span>
      <Input
        id="textCenter"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div id="selectDiv">
      <span id="spanPadding"> FROM </span>
        <Select value={from} onChange={(e) => setFrom(e.target.value)}>
        {Object.keys(units).map((unit) => (
          <MenuItem key={unit} value={unit}>
            {unit}
          </MenuItem>
        ))}
      </Select>
      <span id="spanPadding"> TO </span>
      <Select value={to} onChange={(e) => setTo(e.target.value)}>
        {Object.keys(units).map((unit) => (
          <MenuItem key={unit} value={unit}>
            {unit}
          </MenuItem>
        ))}
      </Select>
      </div>
      
      <Button id="buttonPadding" type="button" onClick={swapUnits}>
        Swap Units
      </Button>
      <section id="convertedSection">
        <span id="spanPadding"> Output : </span>
        <Input value={converted}></Input>
      </section>
      
    </div>
  );
}
