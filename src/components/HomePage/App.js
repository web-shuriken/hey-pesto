import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="homepage-container">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&resize=556,505"
          alt="home-picture"
        />
        <div className="home-text">
          <p>Hey l'ottimo cibo!</p>
          <button>View Menu</button>
        </div>
      </div>
    </div>
  );
}

export default App;
