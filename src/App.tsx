import Header from "./Header";
import Review from "./Review";
import Nav from "./nav";
import Image from "./images";
import "./style.css";

function App(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <Nav />
      <Image />
      <Review />
    </div>
  );
}

export default App;
