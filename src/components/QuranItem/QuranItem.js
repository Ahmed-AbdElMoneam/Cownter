import "./QuranItem.css";

const QuranItem = ({
  juz_number,
  juz_description,
  juz_radio,
  total_pledged,
  handleRadioChange,
}) => {
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
        <input type="radio" id="first-half-radio" name={juz_radio} value="1" />
        <label className="juz-radio-half-label" id="first-half-radio">
          1st half
        </label>
        <input type="radio" id="second-half-radio" name={juz_radio} value="2" />
        <label className="juz-radio-half-label" id="second-half-radio">
          2nd half
        </label>
        <div className="full-juz-section">
          <input type="radio" id="full-juz" name={juz_radio} value="3" />
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
