function Review(): JSX.Element {
  return (
    <div className="review">
      <h3>Please leave a review below.</h3>

      <form action="http://localhost:8000/server.php" method="post">
        <p>
          <label>How was your experience with Freya:</label>
        </p>
        <textarea id="review" name="review"></textarea>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Review;
