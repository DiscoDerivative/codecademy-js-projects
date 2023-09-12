let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;
let age = 18;

if (age > 18 && earlyRegistration) {
  raceNumber += 1000;
  console.log(
    `Hello, your race number is: ${raceNumber}. You will race at 9:30 AM.`
  );
} else if (age > 18 && !earlyRegistration) {
  console.log(
    `Hello, your race number is: ${raceNumber}. Late adults run at 11:00 AM.`
  );
} else if (age < 18) {
  console.log(
    `Hello, your race number is: ${raceNumber}. Youth registrants run at 12:30 PM (regardless of registration)`
  );
} else {
  console.log("Please see the registration desk for more information.");
}
