import "./Title.css";

const Title = () => {
  return (
    <>
      <div className="title-container">
        <h2 className="title-header">Welcome to Cownter</h2>
        <p className="title-paragraph">
          <b>Cownter</b> is a web application that helps you keep track of the
          number of pages read from a group of books in a library. The name
          "Cownter" is derived from the Welsh word for "counter". The app is
          designed to be simple and easy to use, with an intuitive interface
          that allows you to quickly add books and track your progress. With
          Cownter, you can easily add books to your library by searching for
          them online or scanning their barcodes. Once you've added a book, you
          can start tracking your progress by entering the number of pages
          you've read. The app will automatically update your progress and show
          you how many pages you have left to read. Cownter is perfect for
          anyone who wants to keep track of their reading progress and stay
          motivated to read more. Whether you're a student trying to keep up
          with your coursework or just someone who loves to read, Cownter is the
          perfect tool for you.
        </p>
      </div>
    </>
  );
};

export default Title;
