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
      return `Do not pick a time before ${currentHour > 12 ? `${currentHour-12}PM` : `${currentHour}AM`}`
    }
  }

  // Check the data according a/c its type
  return
}

export async function getTasksForToday() {
  // Get all the tasks for today from the database
  // const tasks = await fetch("/api/getTasks").then(res => res.json());
  const tasks = [{
      id: "1",
      heading: "Complet my-day",
      description: "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "8:00AM",
      to: "12:00AM"
    },
    {
      id: "2",
      heading: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "10AM",
      to: "11AM"
    },
    {
      id: "3",
      heading: "Complet my-day",
      description: "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "8:00AM",
      to: "12:00AM"
    },
    {
      id: "4",
      heading: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "2:15 PM",
      to: "2:15 PM"
    },
    {
      id: "5",
      heading: "Complet my-day",
      description: "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "8:00AM",
      to: "12:00AM"
    },
    {
      id: "6",
      heading: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "2:15 PM",
      to: "2:15 PM"
    }
  ];
  return tasks
}