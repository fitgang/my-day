export default function getTasks(req, res) {
  const tasks = [
    {
      id: "1",
      heading: "Complet my-day",
      description: "Complete the app to learn redux and next and react, so that you can apply to internships.",
      from: "25/05/2022 8:00AM",
      to: "31/05/2022 12:00AM"
    },
    {
      id: "2",
      heading: "Buy new glasses",
      description: "The bigger ones or the stark one will be better.",
      from: "28/05/2022",
      to: "28/05/2022"
    }
  ];
  
  res.status(200).json(tasks)
}