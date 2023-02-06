
import './App.scss';
import CV from './components/CV';
import ReactToPdf from 'react-to-pdf';
import { useRef } from 'react'

function App() {
  const refCV = useRef();
  const bgRef = useRef();
  const options = {
    orientation: 'p',
    unit: 'mm',
    format: [211.32, 632.25]
  }

  function discoModeOn() {
    bgRef.current.classList.add('disco-on');
  }
  function discoModeOff() {
    bgRef.current.classList.remove('disco-on');
  }

  return (
    <div className="App">
      <div id="animated-bg" ></div>
      <div className="App-body" ref={bgRef}>
        <ReactToPdf targetRef={refCV} options={options} filename="kolyo-peev-cv.pdf">
          {({ toPdf }) => (
            <button className="download-as-PDF" onClick={toPdf} onMouseEnter={discoModeOn} onMouseLeave={discoModeOff}>Generate pdf</button>
          )}
        </ReactToPdf>
        <div className="CV-container" ref={refCV} >
          <CV />
        </div>
      </div>
    </div>
  );
}

export default App;
