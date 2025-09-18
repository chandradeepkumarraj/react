import Greeting from "./Greeting";
import ProductPrice from "./ProductPrice";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Greeting />
      <hr ></hr>
      <ProductPrice />
      <hr ></hr>
      <UserProfile />
    </div>
  );
}

export default App;
