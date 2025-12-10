import dayjs from "dayjs"

// Function to calculate the next two Mondays dynamically
const getNextTwoMondays = () => {
  const today = dayjs()
  const mondays = []

  let nextMonday = today.clone().day(1) // Day 1 is Monday

  // If today is Monday or later in the week, move to next Monday
  if (today.day() >= 1) {
    nextMonday = nextMonday.add(7, "days")
  }

  // Get the next two Mondays
  for (let i = 0; i < 2; i++) {
    mondays.push(
      nextMonday
        .clone()
        .add(i * 7, "days")
        .format("DD/MM/YYYY"),
    )
  }

  return mondays
}

// Function to calculate upcoming Saturday and Sunday
const getUpcomingWeekendDates = () => {
  const today = dayjs()
  let saturday = today.clone().day(6) // Day 6 is Saturday
  let sunday = today.clone().day(0) // Day 0 is Sunday

  // If today is after Saturday (Sunday), or if today is Saturday and we want next weekend
  if (today.day() === 0 || today.day() === 6) {
    // If today is Saturday or Sunday, get next weekend
    saturday = saturday.add(7, "days")
    sunday = sunday.add(7, "days")
  } else if (today.day() > 6) {
    // This shouldn't happen as day() returns 0-6, but just in case
    saturday = saturday.add(7, "days")
    sunday = sunday.add(7, "days")
  }
  // If today is Monday-Friday, saturday and sunday will be the upcoming weekend

  return {
    saturday: saturday.format("DD/MM/YYYY"),
    sunday: sunday.format("DD/MM/YYYY"),
  }
}

const mondays = getNextTwoMondays()
const weekendDates = getUpcomingWeekendDates()

// Export schedule data
export const scheduleData = mondays.map((date) => ({
  date,
  course: "Data Science",
  trainingType: "Classroom/ Online",
  batch: "Regular Batch",
  city: "Pune",
}))

export const WeekendData = [
  {
    date: weekendDates.saturday,
    course: "Data Science",
    trainingType: "Classroom/ Online",
    batch: "Weekend Batch",
    city: "Pune",
  },
  {
    date: weekendDates.sunday,
    course: "Data Science",
    trainingType: "Classroom/ Online",
    batch: "Weekend Batch",
    city: "Pune",
  },
]
