import logo from './logo.svg';
import CardList from "./containers/CardList";
import './App.css';
import {Sidebar} from "./containers/Sidebar";


function App() {
  return (
      <div className="container ">
          <div className="products-list__inner" data-element="mainWrapper">
              <Sidebar />
              <div className="products products-list__main">
                  <div className="products__search-res">
                      <p>
                          7,618 results found
                      </p>
                      <button className="btn btn--only-img btn--violet">
                          <img src={""} alt={"heart"}/>
                      </button>
                  </div>
                  <CardList/>
              </div>
          </div>
      </div>
  )
}

export default App;

