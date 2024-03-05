// I am going to determine the actual hours i slept for each night last week

// I am going to use this function to determine how many hours i slept each night

const getSleepHours = (day) => {
    if (day === 'Monday') {
        return 6
    } else if (day === 'Tuesday') {
        return 7
    } else if (day === 'Wednesday') {
        return 7
    } else if (day === 'Thursday') {
        return 6
    } else if (day === 'Friday') {
        return 3
    } else if (day === 'Saturday') {
        return 3
    } else if (day === 'Sunday') {
        return 6
    }
}
// getSleepHours means the hours i slept each night
// getActualSleepHours means the total hours i slept per night last week
// getIdealSleepHours means the hours i prefer to sleep per night
// calculateSleepDebt means the debt from my sleep hours last week

const getActualSleepHours = () =>{
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')

}
// function to create the hours i want to sleep per night 
const getIdealSleepHours = () => {
    const idealHours = 7; // the hours i want to sleep per day 
    return idealHours * 7; 
}
// function to create the debt from my sleep hours last week
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("Tina don't worry you have slept the exact amount of hours you needed!");
    } else if (actualSleepHours > idealSleepHours) {
      const subtractedsleep = actualSleepHours - idealSleepHours;
      console.log(`You got ${subtractedsleep} hours more sleep than needed. You should get ${idealSleep} hours more sleep than needed.`);
    } else {
      const sleepDebt = idealSleepHours - actualSleepHours;
      console.log(`You should get ${sleepDebt} more hours of sleep.`);
    }
  };
  console.log('The total hours i slept last week is: ' +getActualSleepHours());
  console.log('The hours i prefer to sleep per night is: ' +getIdealSleepHours());
  calculateSleepDebt();