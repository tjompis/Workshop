//TASK 1
const printCurrentTime = () => {
    const currentTime = new Date()
    return currentTime.toLocaleTimeString()
  }

  console.log(printCurrentTime)

  //TASK 2
  const myName = "Tomas"
  console.log(myName, myName)

  //TASK 3
  const printGreeting = "Hello"

  console.log(printGreeting, "Bob")
  console.log(printGreeting, "Sue")

  //TASK 4
  const multiply = (2 * 2)
  console.log(multiply)

  //TASK 5
  const warmEnough = 10
  let currentTemperature = 15
  if (warmEnough - currentTemperature >= 0) {
    console.log("Go for a run!")
  } else {
    console.log("Don't go for a run!")
  }