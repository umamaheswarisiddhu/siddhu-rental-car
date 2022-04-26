import "./App.css";
import Cart from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "./CartItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import Login from "./Login";
import DateForm from "./DateForm";

function App() {
  //Creating useState for display Cart item data using Array
  const [product, setProducts] = useState([
    {
      id: 1,
      title: "Audi",
      price1: 40000,
      view: true,
      img: "https://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Red-Audi-TT-Sportback-Car-PNG-image.png",
    },
    {
      id: 2,
      title: "Benz",
      rating: true,
      price: 20000,
      price1: 18000,
      sale: true,
      img: "https://th.bing.com/th/id/OIP.mlJApjiEVOIG8G62Hdl-MAHaEe?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      title: "BMW",
      price: 500000,
      price1: 250000,
      sale: true,
      img: "https://carleaseoffers-clo.com/wp-content/uploads/2018/02/usc80bms282a021001.png",
    },
    {
      id: 4,
      title: "Jaguar",
      rating: true,
      price1: 400000,
      img: "https://i.pinimg.com/originals/74/2c/0c/742c0c8ec1ea2e96df08b3810bb3fcfe.png",
    },
    {
      id: 5,
      title: "Ferrari",
      price: 500000,
      price1: 250000,
      sale: true,
      img: "https://purepng.com/public/uploads/medium/purepng.com-ferrari-laferrari-doors-opencarferrarivehicletransport-961524663453ibcei.png",
    },
    {
      id: 6,
      title: "Rolls Royce",
      price1: 1200000,
      view: true,
      img: "https://th.bing.com/th/id/R.9078c1897b5101c0afa5fec17c4ddc11?rik=WCeCzUMWGzkUTg&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f06%2fPNGPIX-COM-Rolls-Royce-Wraith-Mansory-Car-PNG-Image.png&ehk=YGseiIuE%2bTiNpwxtHKCDpHIvVcrB3Y%2fLzDre0%2bErsAY%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 7,
      title: "Lamborghini",
      rating: true,
      price: 200000,
      price1: 180000,
      sale: true,
      img: "https://th.bing.com/th/id/OIP.y6sFCR-Ej5_N-T2kAvpdiwHaDc?pid=ImgDet&rs=1",
    },
    {
      id: 8,
      title: "Mitsubishi",
      rating: true,
      price1: 400000,
      img: "https://i.pinimg.com/originals/c4/c6/70/c4c6702e34cc804c8b60ecd332342a85.png",
    },
  ]);

  const [cartitems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

//function for adding items to cart
  let handleCart = (item) => {
    setCartItems([...cartitems, item]);
    setTotal(total + item.price1);
  };

//function for removing item from cart
  let handleRemoveCart = (item) => {
    let itemIndex = cartitems.findIndex((obj) => item.id === obj.id);
    cartitems.splice(itemIndex, 1);
    setCartItems([...cartitems]);
    setTotal(total - item.price1);
  };

  return (
    //Creating nav bar
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#start">
            <strong>SIDDHU RENTAL CARS</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active fw-6"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#about">
                  About
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-muted"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    shop
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#all">
                        All Products
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="#item">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#new">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
       
              <div className="btn btn-outline-dark p-1" >
                <img
                  alt="_targer"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
                />
                <a href="https://icons8.com/icon/8AfUMPlae06y/shopping-cart">
                  {""}
                </a>{" "}
                Cart
                <span className="badge bg-dark rounded-pill ms-2">
                  {" "}
                  {cartitems.length}{" "}
                </span>
                <hr/>
                <ol className="list-group list-group-numbered">
                  {/* maping array data to cart component */}
                  {cartitems.map((item) => {
                    return (
                      <CartItem
                        item={item}
                        handleRemoveCart={handleRemoveCart}
                      />
                    );
                  })}
                </ol>
                {/* display total amount in cart */}
                {cartitems.length > 0 ? (
                  <div className="col-lg-12 text-center">
                    <h6>Total : {total}</h6>
                  </div>
                ) : (
                  <div className="col-lg-12 text-center">
                    <h6>No Items in Cart</h6>
                  </div>
                )}
              </div>
           
          </div>
        </div>
      </nav>
      
      <div className="container empty"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {/* maping product arrai to cart component to display items detail */}
              {product.map((product) => {
                return (
                  <Cart key={product.id}
                    product={product}
                    cartItems={cartitems}
                    handleCart={handleCart}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;