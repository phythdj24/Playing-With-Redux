import products from "./productList.json";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
// import Product from "./components/Prodcuts";
// import Cart from "./components/Cart";



function App() {
  return (
    <div className="App">


 <AddTodo />
 <Todo />


      {/* <Cart />
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
