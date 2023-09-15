function getSleepHours(day){
  switch(day){
    case 'monday': {
      return 8;
      break;
    }
    case "tuesday":{
      return 8;
      break;
    }
    case "wednesday":{
      return 8;;
      break;
    }
    case "thursday":{
      return 8;
      break;
    }
    case "friday":{
      return 8;
      break;
    }
    case "saturday":{
      return 8;
      break;
    }
    case "sunday":{
      return 8;
      break;
    }
  }
}

getActualSleepHours = () => {
let sum = getSleepHours("monday");
sum += getSleepHours("tuesday");
sum += getSleepHours("wednesday");
sum += getSleepHours("thursday");
sum += getSleepHours("friday");
sum += getSleepHours("saturday");
sum += getSleepHours("sunday");
console.log(sum);
return sum;
}

getIdealSleepHours = () => {
  let idealHours = 8;
  console.log(idealHours * 7);
  return idealHours * 7;
}

calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log("You got perfect sleep!");
  }

  else if(actualSleepHours > idealSleepHours){
    console.log(`You have more sleep than needed.`);
  }
    else if(actualSleepHours < idealSleepHours){
    console.log("You should get some rest.");
  }
}

calculateSleepDebt();
