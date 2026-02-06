export default function FormElements({ inputLabel, type }) {
  return (
    <div className="form-elements">
        <label htmlFor="input" className="form-elements__label">{inputLabel}</label>
        <input type={type} id="input" className="form-elements__input" />
    </div>
  )
}