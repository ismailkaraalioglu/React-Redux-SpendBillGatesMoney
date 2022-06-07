import Header from "./components/Header";
import Money from "./components/Money";
import Products from "./components/Products";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="app">
      <Header />
      <Money />
      <Products />
      <Receipt />
    </div>
  );
}

export default App;
