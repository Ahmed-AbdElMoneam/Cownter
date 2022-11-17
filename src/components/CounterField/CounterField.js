import "./CounterField.css";

const CounterField = ({ field_title, counter, handleCounter }) => {
  return (
    <>
      <input type="text" value={field_title} className="field-div" disabled />
      <select
        className="field"
        name="field"
        onChange={handleCounter}
        value={counter}
      >
        <optgroup label="Suggestions">
          <option value="placeholder" disabled hidden>
            Zikr Count
          </option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="5000">5000</option>
        </optgroup>
      </select>
    </>
  );
};

export default CounterField;
