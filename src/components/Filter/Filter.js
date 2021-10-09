import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      <span className={s.span}>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

export default Filter;
