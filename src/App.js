import './App.css';
import portrait from './images/portrait.jpeg'

function App() {
  return (
    <div className="App">
      {/* Insert a basic nav bar with Experience and Projects/Past Work pages */}
      <div>
        <img className="portrait" src={portrait} alt="Portrait"></img>
      </div>
      <div>
        <p>Hi my name is Jonathan Khattar i am a Software Developer based in Sydney Australia and welcome to my online resume portfolio</p>
      </div>
      <div>
        <h3>Contact Info</h3>
        <ul className="contact-info-list">
          <li>Email: jonathan.khattar91@gmail.com</li>
          <li>Mobile: (+61)423 591 923</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
