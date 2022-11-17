import "./QuranHeader.css";

const QuranHeader = () => {
  return (
    <div className="quran-list-header">
      <p className="quran-list-title">Quran Pledge</p>
      <ul className="quran-categories">
        <li>Juz & Surah</li>
        <li>Half or Full Juz</li>
        <li>Total Pledged </li>
      </ul>
    </div>
  );
};

export default QuranHeader;
