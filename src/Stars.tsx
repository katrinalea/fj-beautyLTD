import { useState } from "react";

function Stars(): JSX.Element {
  const [state, setState] = useState("");
  const [prevState, setPrevState] = useState<string[]>([]);

  const five = () => {
    setState("5⭐");
    ratings.push(state);
  };
  const four = () => {
    setState("4⭐");
    ratings.push(state);
  };
  const three = () => {
    setState("3⭐");
    ratings.push(state);
  };
  const two = () => {
    setState("2⭐");
    ratings.push(state);
  };
  const one = () => {
    setState("1⭐");
    ratings.push(state);
  };
  const stored = () => {
    setPrevState([...prevState, state]);
  };

  return (
    <p className="rating">
      <h3> Please choose a star rating ⭐</h3>
      <button onClick={five}>5</button>
      <button onClick={four}>4</button>
      <button onClick={three}>3</button>
      <button onClick={two}>2</button>
      <button onClick={one}>1</button>
      <br />
      <button onClick={stored}>Submit rating</button>
      <p>Your rating: {prevState}</p>
      <Previous />
    </p>
  );
}
const ratings: string[] = [];
const Previous = () => {
  return (
    <>
      <p> See the previous 5 ratings below</p>
      <ul>
        {ratings.slice(-5).map((ratings) => {
          return <>{ratings}</>;
        })}
      </ul>
    </>
  );
};

export default Stars;
