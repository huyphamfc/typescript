class Ride {
  static activeRides = 0;

  start() {
    Ride.activeRides++;
  }

  stop() {
    Ride.activeRides--;
  }
}

const ride1 = new Ride();
const ride2 = new Ride();

ride1.start();
ride2.start();

console.log(Ride.activeRides); // 2
