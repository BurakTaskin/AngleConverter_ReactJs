import { useState } from "react";
import { rates, units } from "./enums";

const useAngleState = () => {
  const [amount, setAmount] = useState(0);
  const [fromUnit, setFromUnit] = useState(units.DEG);
  const [toUnit, setToUnit] = useState(units.RAD);

  const convert = (from, to, amt) => {
    if (from === to) {
      return amt;
    }

    const rateKey = from + "TO" + to;
    const rate = rates[rateKey];
    return amt * rate;
  };

  const converted = convert(fromUnit, toUnit, amount);

  const swapUnits = () => {
    const oldFrom = fromUnit;
    const oldTo = toUnit;
    setFromUnit(oldTo);
    setToUnit(oldFrom);
  };

  return [
    amount,
    converted,
    fromUnit,
    toUnit,
    setAmount,
    setFromUnit,
    setToUnit,
    swapUnits
  ];
};

export { useAngleState };
