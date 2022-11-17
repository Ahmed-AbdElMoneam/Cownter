import Title from "./components/Title/Title";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title-section">
          <Title />
        </div>
        <div className="content-section">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
