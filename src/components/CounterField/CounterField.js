import { useState } from "react";
import "./CounterField.css";

const CounterField = ({
  field_title,
  field_id,
  handleTitleChange,
  handleZikrNumber,
}) => {
  const [val, setVal] = useState(0);

  const handleFieldValue = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      {field_id === 0 && (
        <input
          type="text"
          name={field_title}
          id="0"
          value={field_title}
          className="field-type"
          disabled
        />
      )}
      {field_id > 0 && (
        <select
          className="field-type field-type-arrow"
          name={field_title}
          id={field_id}
          onChange={(e) => handleTitleChange(e, field_id)}
          value={field_title}
        >
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Novella">Novella</option>
          <option value="Poetry">Poetry</option>
        </select>
      )}
      <input
        type="number"
        id={field_id}
        className="field"
        name={field_title}
        value={val ? val : ""}
        onChange={(e) => {
          handleFieldValue(e);
          handleZikrNumber(e, field_id, field_title, val);
        }}
        placeholder="Books Count"
      />
    </>
  );
};

export default CounterField;
