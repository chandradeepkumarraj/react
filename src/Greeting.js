function Greeting() {
  function getMessage() {
    return "Hello, welcome to React!";
  }

  return (
    <div>
      <h1>{getMessage()}</h1>
    </div>
  );
}

export default Greeting;
