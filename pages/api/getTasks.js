import mongoose from "mongoose";
import dotenv from "dotenv";
// import Task from "../../DBModels/Task";

dotenv.config();
mongoose.connect(
  process.env.MONGO_URI,
  () => console.log("connected"),
  (e) => console.error(e)
);

const Task = mongoose.model("Task");

export default function getTasks(req, res) {
  // Find the user in DB
  // Get all tasks (tasks and user are in the same document)
  Task.find({}, function (err, docs) {
    if (!err) {
      res.status(200).json(docs);
      console.log("docs sent");
      return;
    }

    console.log("error in DB");
    res.status(500).json({});
  });

  return;

  const tasks = {
    1: {
      id: "1",
      name: "Complet my-day",
      description:
        "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "08:00AM",
      to: "12:00AM",
    },

    2: {
      id: "2",
      name: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "10:00AM",
      to: "11:00AM",
    },

    3: {
      id: "3",
      name: "Complet my-day",
      description:
        "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "08:00AM",
      to: "12:00AM",
    },

    4: {
      id: "4",
      name: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "02:15 PM",
      to: "02:15 PM",
    },

    5: {
      id: "5",
      name: "Complet my-day",
      description:
        "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "08:00AM",
      to: "12:00AM",
    },

    6: {
      id: "6",
      name: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "02:15 PM",
      to: "02:15 PM",
    },
  };

  res.status(200).json(tasks);
}
