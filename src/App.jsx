import "./App.css";
import Button from "./components/Button.jsx";
import Alert from "./components/Alert.jsx";

const errorIcon = (<svg></svg>)

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button bgcolor = "#074EE8" />
        <Button bgcolor = "#07A4E8"/>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert bgcolor = "#F9C8C8" text = "☹️ This is error alert box"/>
        <Alert bgcolor = "#F9D9C8" text = "⚠️ This is warning alert box"/>
        <Alert bgcolor = "#F9EBC8" text = "ℹ️ This is info alert box"/>
        <Alert bgcolor = "#CEF7CD" text = "✅ This is succes alert box"/>
      </div>
    </div>
  );
}

export default App;
