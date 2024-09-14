// function CarbonEmissionFromMining(fuelConsumed, fuelType) {
//   if (fuelType == "Diesel") return fuelConsumed * 2.67;
//   else if (fuelType == "BioDiesel") return fuelConsumed * 2.39;
//   else return fuelConsumed * 0.82;
// }
// function methaneEmission(methaneEmission, gwp) {
//   return methaneEmission * gwp;
// }
// function CarbonCalculator(
//   fuelConsumed,
//   fuelType,
//   eletricityConsumedForMiningEquip,
//   methaneEmission
// ) {
//   FinalCarbonEmission =
//     CarbonEmissionFromMining(fuelConsumed, fuelType) +
//     CarbonEmissionFromMining(eletricityConsumedForMiningEquip, "electric");
//   FinalCarbonEmission += methaneEmission(methaneEmission, 25);
// }
export function CarbonEmissionFromFuel(fuelType, fuelConsumed) {
  switch (fuelType) {
    case "anthracite":
      return fuelConsumed * 2.87;
    case "bituminous":
      return fuelConsumed * 2.57;
    case "lignite":
      return fuelConsumed * 1.53;
    case "subbituminous":
      return fuelConsumed * 1.85;
    case "diesel":
      return fuelConsumed * 2.73;
    case "subbituminous":
      return fuelConsumed * 1.85;
    case "Fuel Oil":
      return fuelConsumed * 2.9;
    case "LPG":
      return fuelConsumed * 2.95;
    case "Pet Coke":
      return fuelConsumed * 3.39;
    case "Rice Husk":
      return fuelConsumed * 2.28;
    case "Wood":
      return fuelConsumed * 1.81;
    default:
      return 0;
  }
}
export function CarbonEmissionFromElectricity(units) {
  return (units * 1.0035).toFixed(2);
}
function CarbonEmissionFromElectricEquip(load, amount, avgUse) {
  return load * amount * avgUse * 0.031;
}
function getCarbonMultiplier(activity) {
  switch (activity) {
    case "afforestation":
return (2 + 4) / 2; // 2-4 metric tons CO2/hectare/year

case "methaneCapture":
  return (25 + 50) / 2; // 25-50 metric tons CO2e/cubic meter of methane captured/year

case "renewableEnergy":
  return (0.5 + 1) / 2; // 0.5-1 metric ton CO2/MWh

case "soilCarbon":
  return (0.2 + 1) / 2; // 0.2-1 metric ton CO2/hectare/year

case "ccs":
  return 0.9; // Up to 90% of facility CO2 emissions

case "beccs":
  return (1 + 2) / 2; // 1-2 metric tons CO2/MWh

case "carbonCredits":
  return 1; // 1 metric ton CO2 per credit

case "enhancedWeathering":
  return (0.5 + 1) / 2; // 0.5-1 metric ton CO2/ton of rock

case "biochar":
  return (0.5 + 1) / 2; // 0.5-1 metric ton CO2/ton of biochar

case "renewableDiesel":
  return (2.5 + 3.5) / 2; // 2.5-3.5 metric tons CO2e/1,000 gallons

case "avoidedDeforestation":
  return (100 + 200) / 2; // 100-200 metric tons CO2/hectare/year

case "oceanAlkalinity":
  return (0.5 + 1) / 2; // 0.5-1 metric ton CO2/ton of substance

case "wetlandsPeatlands":
  return (3 + 6) / 2; // 3-6 metric tons CO2/hectare/year

default:
  throw new Error("Unknown activity type");
}
}

export function totalCarbonEmission() {
  // Retrieve and shorten variable names for emissions
  var transElecEm = Number(localStorage.getItem("electricityEmissions")) || 0;
  var transFuelEm = Number(localStorage.getItem("fuelEmissions")) || 0;
  var excElecEm = Number(localStorage.getItem("electricityEmission")) || 0;
  var excFuelEm = Number(localStorage.getItem("fuelEmission")) || 0;

  // Calculate the total emissions
  var totalEmission = transElecEm + transFuelEm + excElecEm + excFuelEm;

  // Retrieve the carbon offset values from localStorage and convert them to numbers
  var offsets = [
    "afforestation",
    "methaneCapture",
    "renewableEnergy",
    "soilCarbon",
    "ccs",
    "beccs",
    "carbonCredits",
    "enhancedWeathering",
    "biochar",
    "renewableDiesel",
    "avoidedDeforestation",
    "oceanAlkalinity",
    "wetlandsPeatlands",
  ].map((key) => (Number(localStorage.getItem(key)) || 0) *getCarbonMultiplier(key));

  // Subtract all offsets from the total emission
  totalEmission -= offsets.reduce((acc, val) => acc + val, 0);
  const equipmentListJSON = localStorage.getItem("equipmentList");

  // Check if the equipmentList exists and parse it
  const equipmentList = equipmentListJSON ? JSON.parse(equipmentListJSON) : [];

  // Iterate over the equipmentList array
  equipmentList.forEach((equipment) => {
    var emissionString = equipment.emissions
    if(emissionString[0]=='.')
      emissionString = "0"+emissionString
    var value = parseFloat(emissionString)
    totalEmission+=value
    

  });
  totalEmission  = totalEmission.toFixed(5)
  // Optional: return or log the final total emission
  console.log("Total Carbon Emission:", totalEmission);
  return totalEmission;
}
