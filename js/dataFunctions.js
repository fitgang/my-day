export function validateData(data, type) {
  // If data is not provided, then return this error
  if (data.length === 0) {
    return "fill this field."
  }

  if (type === "time") {
    // If the time given is of the past
    // The allowed time is from the current hour
    // 24 hour format
    const currentHour = (new Date()).getHours(),
      inputHour = Number(data.substring(0, 2));

    if (inputHour < currentHour) {
      return `Do not pick a time before ${currentHour > 12 ? `${currentHour - 12}PM` : `${currentHour}AM`}`
    }
  }

  // Check the data according a/c its type
  return
}

export async function getTasksForToday() {
  const origin = "http://localhost:3000";
  // Get all the tasks for today from the database
  const tasks = await fetch(origin + "/api/getTasks").then(res => res.json());
  return tasks
}