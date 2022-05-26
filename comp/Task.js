export default function Task(props) {
  const {heading, description, from, to} = props.task;

  return (
    <li className="task">

      <section className="details">
        <h2 className="heading">{heading}</h2>
        <p className="description">{description}</p>
      </section>

      <div className="duration">
        <div className="from">{from}</div>
        <div className="to">{to}</div>
      </div>

      <div className="actions">
        <div className="done"></div>
        <div className="others">
          <div className="delete"></div>
          <div className="edit"></div>
        </div>
      </div>

    </li>
  )
}