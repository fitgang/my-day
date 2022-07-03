import dbConnect from "../../DB/dbConnect";
import Task from "../../DB/Models/Task"

export default async function getTasks(req, res) {
  // Find the user in DB
  // Get all tasks (tasks and user are in the same document)

  await dbConnect();

  Task.find({}, function (err, docs) {
    if (!err) {
      res.status(200).json(docs);
      console.log("docs sent");
      return;
    }

    res.status(500).json();
    console.log("error in DB");
  });

  return;
}
