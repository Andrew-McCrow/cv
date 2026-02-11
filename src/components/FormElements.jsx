
export default function FormElements({ inputLabel, type, value, onChange }) {
  return (
    <div className="form-elements">
      <label htmlFor="input" className="form-elements__label">{inputLabel}</label>
      {type === "textarea" ? (
        <textarea
          id="input"
          className="form-elements__input"
          value={value}
          onChange={onChange}
          rows={4}
        />
      ) : (
        <input
          type={type}
          id="input"
          className="form-elements__input"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  )
}