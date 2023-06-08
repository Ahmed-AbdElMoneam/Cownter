import "./QuranHeader.css";

const QuranHeader = () => {
  return (
    <div className="quran-list-header">
      <p className="quran-list-title">Books Read</p>
      <ul className="quran-categories">
        <li>Book</li>
        <li>Half or Full Book</li>
        <li>Total Read</li>
      </ul>
    </div>
  );
};

export default QuranHeader;
