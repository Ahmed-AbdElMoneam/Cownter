import { useState } from "react";
import ZikrList from "../ZikrList/ZikrList";
import QuranList from "../QuranList/QuranList";
import "./Form.css";

const Form = () => {
  const [salawat, setSalawat] = useState("placeholder");
  const [tasbeeh, setTasbeeh] = useState("placeholder");
  const [takbeer, setTakbeer] = useState("placeholder");
  const [juzs, setJuzs] = useState([]);

  const handleSalawat = (e) => setSalawat(e.target.value);
  const handleTasbeeh = (e) => setTasbeeh(e.target.value);
  const handleTakbeer = (e) => setTakbeer(e.target.value);

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
    salawat,
    tasbeeh,
    takbeer,
    juzs,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(submitted);
  };

  return (
    <>
      <h1 className="content-header">Your Baraka Pledge</h1>
      <form className="content-form" onSubmit={handleSubmit}>
        <ZikrList
          counter={[salawat, tasbeeh, takbeer]}
          handleCounter={[handleSalawat, handleTasbeeh, handleTakbeer]}
        />
        <QuranList handleRadioChange={handleRadioChange} />
        <button className="pledge-button">Pledge</button>
      </form>
    </>
  );
};

export default Form;
