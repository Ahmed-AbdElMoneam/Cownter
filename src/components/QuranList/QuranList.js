import QuranHeader from "../QuranHeader/QuranHeader";
import QuranJuzs from "../QuranJuzs/QuranJuzs";
import "./QuranList.css";

const QuranList = ({ handleRadioChange }) => {
  return (
    <div>
      <QuranHeader />
      <QuranJuzs handleRadioChange={handleRadioChange} />
      <div className="quran-list-footer"></div>
    </div>
  );
};

export default QuranList;
