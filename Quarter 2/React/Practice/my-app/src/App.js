import './App.css';
import NavBar from './conponents/NavBar';
import TextForm from './conponents/TextForm';

function App() {
  return (
    <>
      <NavBar title="My First Appp" about="Know Us"></NavBar>
      <div className="container my-3">
        <TextForm heading="Enter Text to Analyze:"></TextForm>
      </div>
    </>
  );
}

export default App;
