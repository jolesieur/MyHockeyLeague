import Header from "./components/header";
import GameCard from "./components/GameCard";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div>
      <Header />
      <UserInfo playerName="John Doe" playerEmail="john.doe@example.com" teamColor="text-primary" />
      <div className="container-fluid mt-4">
        <h1>Horaire</h1>
        <div className="row">
          <div className="col-md-4">
            <GameCard dateTime="20 octobre 2024, 21h00" localization="Glace A" />
          </div>
          <div className="col-md-4">
            <GameCard dateTime="31 octobre 2024, 20h30" localization="Glace B" />
          </div>
          <div className="col-md-4">
            <GameCard dateTime="8 novembre 2024, 21h00" localization="Glace A" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
