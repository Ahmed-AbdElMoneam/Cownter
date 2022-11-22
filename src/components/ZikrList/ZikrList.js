import CounterField from "../CounterField/CounterField";
import AddField from "../AddField/AddField";
import "./ZikrList.css";

const ZikrList = ({
  handleTitleChange,
  handleZikrNumber,
  handleAddingField,
  fields,
}) => {
  return (
    <div>
      <ul className="content-counter-list">
        {fields.map((field) => {
          return (
            <li key={field.id} className="content-counter-item">
              <CounterField
                field_title={field.field_title}
                field_id={field.id}
                handleTitleChange={handleTitleChange}
                handleZikrNumber={handleZikrNumber}
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
