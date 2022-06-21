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
  // Get all the tasks for today from the database
  // const tasks = await fetch("/api/getTasks").then(res => res.json());
  const tasks = {
    1: {
      id: "1",
      name: "Complet my-day",
      description: "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "08:00AM",
      to: "12:00AM"
    },

    2: {
      id: "2",
      name: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "10:00AM",
      to: "11:00AM"
    },

    3: {
      id: "3",
      name: "Complet my-day",
      description: "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "08:00AM",
      to: "12:00AM"
    },

    4: {
      id: "4",
      name: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "02:15 PM",
      to: "02:15 PM"
    },

    5: {
      id: "5",
      name: "Complet my-day",
      description: "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "08:00AM",
      to: "12:00AM"
    },
    
    6: {
      id: "6",
      name: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "02:15 PM",
      to: "02:15 PM"
    }
  };
  return tasks
}