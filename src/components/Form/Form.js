import { useState } from "react";
import ZikrList from "../ZikrList/ZikrList";
import QuranList from "../QuranList/QuranList";
import "./Form.css";

const Form = () => {
  const [fields, setFields] = useState([
    { id: 0, field_title: "Salawat" },
    { id: 1, field_title: "Tasbeeh" },
  ]);
  const [juzs, setJuzs] = useState([]);

  const handleTitleChange = (e) => {
    const target_field_id = e.target.id;
    const target_field_type = e.target.value;
    setFields((prevFields) => {
      const other_fields = prevFields.filter(
        (field) => field.id != target_field_id
      );
      const ordered_fields = [
        ...other_fields,
        { id: Number(target_field_id), field_title: target_field_type },
      ];
      ordered_fields.sort((a, b) => a.id - b.id);
      return ordered_fields;
    });
  };

  const handleZikrNumber = (e) => {
    const field_id = e.target.id;
    const field_name = e.target.name;
    const zikr_number = e.target.value;
    setFields((prevFields) => {
      const other_fields = prevFields.filter((field) => field.id != field_id);
      const ordered_fields = [
        ...other_fields,
        {
          id: Number(field_id),
          field_title: field_name,
          zikr_number: zikr_number,
        },
      ];
      ordered_fields.sort((a, b) => a.id - b.id);
      return ordered_fields;
    });
  };

  const handleAddingField = (e) => {
    e.preventDefault();
    setFields([...fields, { id: fields.length, field_title: "Takbeer" }]);
  };

  const handleRadioChange = (e) => {
    const completed =
      e.target.value == 1
        ? "first part"
        : e.target.value == 2
        ? "second part"
        : "full";
    const juz_number = e.target.name;
    setJuzs((prev) => {
      const edited_juzs = prev.filter((juz) => juz.id !== juz_number);
      return [
        ...edited_juzs,
        { id: juz_number, juz: juz_number, status: completed },
      ];
    });
  };

  const submitted = {
    fields,
    juzs,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitted);
  };
  return (
    <>
      <h1 className="content-header">Your Baraka Pledge</h1>
      <form className="content-form" onSubmit={handleSubmit}>
        <div className="content-form-inputs">
          <ZikrList
            handleTitleChange={handleTitleChange}
            handleZikrNumber={handleZikrNumber}
            handleAddingField={handleAddingField}
            fields={fields}
          />
          <QuranList handleRadioChange={handleRadioChange} />
        </div>
        <button className="pledge-button">Pledge</button>
      </form>
    </>
  );
};

export default Form;
