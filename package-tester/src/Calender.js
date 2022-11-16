import logo from './logo.svg';
import './Calender.css';

function Calender() {
  return (
    <div className="Calender">
      <header className="Calender-header">
        <img src={logo} className="Calender-logo" alt="logo" />
        <p>
          Edit <code>src/Calender.js</code> and save to reload.
        </p>
        <a
          className="Calender-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Calender;
