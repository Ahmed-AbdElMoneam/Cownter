import { useState } from "react";
import "./QuranItem.css";

const QuranItem = ({
  juz_number,
  juz_description,
  juz_radio,
  total_pledged,
  handleRadioChange,
}) => {
  const [completed_first, setCompletedFirst] = useState(false);
  const [completed_second, setCompletedSecond] = useState(false);
  const [completed_full, setCompletedFull] = useState(false);
  const handleChangeFirst = (e) => {
    setCompletedFirst(e.target.checked);
  };
  const handleChangeSecond = (e) => {
    setCompletedSecond(e.target.checked);
  };
  const handleChangeFull = (e) => {
    setCompletedFull(e.target.checked);
  };
  const handleClickFull = (e) => {
    setCompletedFirst(!completed_first);
    setCompletedSecond(!completed_second);
    setCompletedFull(!completed_full);
  };
  const handleClickFirst = (e) => {
    setCompletedSecond(!completed_second);
  };
  const handleClickSecond = (e) => {
    setCompletedFirst(!completed_first);
    completed_second && setCompletedFull(!completed_full);
  };
  return (
    <ul className="juz-review">
      <li className="juz-review-items">
        <p
          style={{
            fontFamily: "Ledger",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
          }}
        >
          Juz {juz_number}
        </p>
        <p
          style={{
            fontFamily: "Ledger",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            backgroundColor: "#EAEAEA",
            borderRadius: "10px",
            padding: "2px",
          }}
        >
          {juz_description}
        </p>
      </li>
      <li className="juz-review-items juz-radios" onChange={handleRadioChange}>
        <input
          type="checkbox"
          id="first-half-check"
          name={juz_radio}
          value="1"
          style={{ margin: "0 0.4vw" }}
          checked={completed_second}
          onChange={handleChangeFirst}
          onClick={handleClickFirst}
        />
        <label className="juz-radio-half-label" id="first-half-check">
          1st half
        </label>
        <input
          type="checkbox"
          id="second-half-check"
          name={juz_radio}
          value="2"
          style={{ margin: "0 0.4vw" }}
          checked={completed_first}
          onChange={handleChangeSecond}
          onClick={handleClickSecond}
        />
        <label className="juz-radio-half-label" id="second-half-check">
          2nd half
        </label>
        <div className="full-juz-section">
          <input
            type="radio"
            id="full-juz"
            name={juz_radio}
            value="2"
            checked={completed_full}
            onChange={handleChangeFull}
            onClick={handleClickFull}
          />
          <label className="juz-radio-full-label" id="full-juz">
            Full
          </label>
        </div>
      </li>
      <li className="juz-review-items">
        <p
          style={{
            fontFamily: "Ledger",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
          }}
        >
          {total_pledged}
        </p>
      </li>
    </ul>
  );
};

export default QuranItem;
