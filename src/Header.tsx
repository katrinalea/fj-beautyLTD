function Header(): JSX.Element {
  return (
    <div className="header">
      <h1> Freya Jensen Beauty LTD</h1>

      <h2> Eyelash and Brow specialist </h2>

      <p>
        <a href="https://www.instagram.com/freyajensenbeauty/">
          {" "}
          Follow our Instagram !{" "}
        </a>{" "}
        |
        <a href="https://www.google.co.uk/maps/place/Bebington,+Wirral/data=!4m2!3m1!1s0x487ad898b2a90b47:0x79ca4c8aa4bf5ba2">
          {" "}
          Studio address{" "}
        </a>
      </p>
    </div>
  );
}

export default Header;
