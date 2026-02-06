export default function Card({ children, cardHeading }) {
  return (
    <div className="card">
        <h2 className="card__title">{cardHeading}</h2>
      {children}
    </div>
  )
};