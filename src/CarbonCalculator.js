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
export function CarbonEmissionFromFuel(fuelType , fuelConsumed)
{
  switch(fuelType) {
    case "anthracite":
    return fuelConsumed*2.87;
    case "bituminous":
    return fuelConsumed*2.57;
    case "lignite":
    return fuelConsumed*1.53;
    case "subbituminous":
    return fuelConsumed*1.85;
    case "diesel":
    return fuelConsumed*2.73;
    case "subbituminous":
    return fuelConsumed*1.85;
    case "Fuel Oil":
    return fuelConsumed*2.90;
    case "LPG":
    return fuelConsumed*2.95;
    case "Pet Coke":
    return fuelConsumed*3.39;
    case "Rice Husk":
    return fuelConsumed*2.28;
    case "Wood":
    return fuelConsumed*1.81;
    default:
    return 0;
  }
}
export function CarbonEmissionFromElectricity(units) {
  return (units*1.0035).toFixed(2);
}
function CarbonEmissionFromElectricEquip(load,amount,avgUse) {
  return load*amount*avgUse*0.031;
}
function totalCarbonEmission() {
  // Retrieve and shorten variable names for emissions
  var transElecEm = Number(localStorage.getItem('electricityEmissions')) || 0;
  var transFuelEm = Number(localStorage.getItem('fuelEmissions')) || 0;
  var excElecEm = Number(localStorage.getItem('electricityEmission')) || 0;
  var excFuelEm = Number(localStorage.getItem('fuelEmission')) || 0;

  // Calculate the total emissions
  var totalEmission = transElecEm + transFuelEm + excElecEm + excFuelEm;

  // Retrieve the carbon offset values from localStorage and convert them to numbers
  var offsets = [
    'afforestation', 'methaneCapture', 'renewableEnergy', 'soilCarbon',
    'ccs', 'beccs', 'carbonCredits', 'enhancedWeathering', 'biochar',
    'renewableDiesel', 'avoidedDeforestation', 'oceanAlkalinity', 'wetlandsPeatlands'
  ].map(key => Number(localStorage.getItem(key)) || 0);

  // Subtract all offsets from the total emission
  totalEmission -= offsets.reduce((acc, val) => acc + val, 0);

  // Optional: return or log the final total emission
  console.log('Total Carbon Emission:', totalEmission);
  return totalEmission;
}

