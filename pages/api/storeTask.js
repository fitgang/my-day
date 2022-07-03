import dbConnect from "../../DB/dbConnect";
import Task from "../../DB/Models/Task";

export default async function storeTask(req, res) {
  // Find the user in DB
  // Get all tasks (tasks and user are in the same document)
  // console.log(req.body);
  // res.status(500).json("error");
  // return

  await dbConnect();

  const task = req.body;
  ["from", "to"].forEach((time) => {
    if (task[time].min.length === 0) task[time].min = "0";
    task[time] = task[time].hour + ":" + task[time].min + task[time].m;
  });

  const doc = new Task(task);
  doc.save(function (err, doc) {
    if (err) {
      res.status(500).json(err);
      console.log(err);
      return;
    }

    res.status(200).json(doc.id);
    console.log(doc.id);
  });

  return;
}
