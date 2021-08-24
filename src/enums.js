const units = {
    DEG: "DEG",
    RAD: "RAD",
    MIL: "MIL"
  };
  
  const rates = {
    DEGTORAD: Math.PI / 180,
    RADTODEG: 180 / Math.PI,
    MILTODEG: 0.05625,
    DEGTOMIL: 17.777777777778,
    RADTOMIL: 1018.5916357867,
    MILTORAD: 0.0009817477
  };
  
  export { rates, units };
  