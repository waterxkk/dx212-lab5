const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
  { route: "NGV-4", passengers: 51, late: false },
];

const busMessages = buses.map(
  bus => `${bus.route} มีผู้โดยสาร ${bus.passengers} คน`
);

console.log(busMessages);
const lateBuses = buses.filter(
  bus => bus.late === true
);

console.log(lateBuses);
const totalPassengers = buses.reduce(
  (total, bus) => total + bus.passengers,
  0
);

console.log(totalPassengers);

const latePassengers = buses
  .filter(bus => bus.late === true)
  .reduce((total, bus) => total + bus.passengers, 0);

console.log(latePassengers);