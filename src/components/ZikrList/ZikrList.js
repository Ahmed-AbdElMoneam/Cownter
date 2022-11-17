import { useState } from "react";
import CounterField from "../CounterField/CounterField";
import AddField from "../AddField/AddField";
import "./ZikrList.css";

const ZikrList = ({ counter, handleCounter }) => {
  const [fields, setFields] = useState([
    { id: 0, field_title: "Salawat" },
    { id: 1, field_title: "Tasbeeh" },
  ]);

  const handleAddingField = (e) => {
    e.preventDefault();
    if (fields.length === 2) {
      setFields([...fields, { id: fields.length, field_title: "Takbeer" }]);
    }
  };

  return (
    <div>
      <ul className="content-counter-list">
        {fields.map((field) => {
          return (
            <li key={field.id} className="content-counter-item">
              <CounterField
                field_title={field.field_title}
                handleCounter={handleCounter[field.id]}
                counter={counter[field.id]}
              />
            </li>
          );
        })}
      </ul>
      <div className="content-counter-adder">
        <AddField handleAddingField={handleAddingField} />
      </div>
    </div>
  );
};

export default ZikrList;
