import "./App.css";
import Button from './components/Button.jsx'
import "./components/Button.css";
import Alert from "./components/Alert.jsx";
import "./components/Alert.css"

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button ClassName="primary-button" />
        <br />
        <Button ClassName="secondary-button" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert ClassName = "error-alert"
        Emoji = {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 9H9.01" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 9H15.01" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        }
        Text = "This is warning alert box" />
        <Alert ClassName = "warning-alert"
        Emoji = {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_910_3720)">
          <path d="M10.29 3.85996L1.82 18C1.64537 18.3024 1.55296 18.6453 1.55199 18.9945C1.55101 19.3437 1.64149 19.6871 1.81442 19.9905C1.98736 20.2939 2.23672 20.5467 2.53771 20.7238C2.83869 20.9009 3.1808 20.9961 3.53 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.85996C13.5317 3.56607 13.2807 3.32308 12.9812 3.15444C12.6817 2.98581 12.3437 2.89722 12 2.89722C11.6563 2.89722 11.3183 2.98581 11.0188 3.15444C10.7193 3.32308 10.4683 3.56607 10.29 3.85996V3.85996Z" stroke="#EA712D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 17H12.01" stroke="#EA712D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 9V13" stroke="#EA712D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_910_3720">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          
        }
        Text = "This is warning alert box" />
        <Alert ClassName = "info-alert"
        Emoji = {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_910_3718)">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F29811" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V12" stroke="#F29811" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16H12.01" stroke="#F29811" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_910_3718">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          }
        Text = "This is info alert box" />
        <Alert ClassName = "success-alert"
        Emoji = {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53446 21.3746C6.51167 20.6273 4.78465 19.2461 3.61095 17.4371C2.43726 15.628 1.87978 13.4881 2.02167 11.3363C2.16355 9.18455 2.9972 7.13631 4.39827 5.49706C5.79935 3.85781 7.69278 2.71537 9.79618 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          }
        Text = "This is success alert box" />
      </div>
    </div>
  );
}

export default App;
