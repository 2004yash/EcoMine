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