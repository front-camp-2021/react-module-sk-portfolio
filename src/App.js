import logo from './logo.svg';
import CardList from "./containers/CardList";
import './App.css';
import {Sidebar} from "./containers/Sidebar";

const filters = [
    "Asus",
    "Acer",
    "Apple",
    "Dell",
    "Dynamode",
    "Gigabyte",
    "Kingston",
    "Lenovo",
    "Logitech",
    "MSI",
    "BenQ",
    "A4Tech"
]

const products =   [
    {
        "id": "76w0hz7015kkr9kjkav",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
            "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
        ],
        "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
        "rating": 2.89,
        "price": 15999,
        "category": "laptops",
        "brand": "acer"
    },
    {
        "id": "qeagrlm9lrkr9kjkav",
        "images": [
            "https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg",
            "https://content2.rozetka.com.ua/goods/images/big_tile/178060625.jpg"
        ],
        "title": "Ноутбук Acer Aspire 7 A715-41G-R9KP (NH.Q8QEU.00L) Charcoal Black",
        "rating": 1.96,
        "price": 21500,
        "category": "laptops",
        "brand": "acer"
    },
    {
        "id": "0y9ksratv6akr9kjkav",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg",
            "https://content1.rozetka.com.ua/goods/images/big_tile/178060662.jpg"
        ],
        "title": "Ноутбук Acer Aspire 7 A715-75G-51ZW (NH.Q88EU.00P) Charcoal Black",
        "rating": 2.42,
        "price": 22999,
        "category": "laptops",
        "brand": "acer"
    },
]

function App() {
  return (
      <div className="container ">
          <div className="products-list__inner" data-element="mainWrapper">
              <Sidebar filters={filters}/>
              <div className="products products-list__main">
                  <div className="products__search-res">
                      <p>
                          7,618 results found
                      </p>
                      <button className="btn btn--only-img btn--violet">
                          <img src={""} alt={"heart"}/>
                      </button>
                  </div>
                  <CardList products={products} />
              </div>
          </div>
      </div>
  )
}

export default App;

