import Header from "./Header";
import Review from "./Review";
import Nav from "./nav";
import Image from "./images";
import Stars from "./Stars";
import "./style.css";

function App(): JSX.Element {
  return (
    <div className="primaryContainer">
      <Header />
      <Nav />
      <Image />
      <Review />
      <Stars />
    </div>
  );
}

export default App;
