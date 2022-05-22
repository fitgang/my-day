export default function Task(props) {
  return (
    <li className="task">
      <section className="details">
        <h2 className="heading">shoes work</h2>
        <p className="description">Clean your shoes and get tawa</p>
      </section>
      <div className="duration">
        <div className="from">7 pm</div>
        <div className="to">8 pm</div>
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