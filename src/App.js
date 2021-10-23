import CardList from "./containers/CardList/CardList";
import {Sidebar} from "./containers/Sidebar";
import heart from "img/icons/white-heart.svg"
import {useSelector} from "react-redux";
import {setFilteredProducts} from "./containers/CardList/helpers/setFilteredProducts";
import {selectProducts} from "./features/products/selectors";
import {selectActiveFilters} from "./features/filters/selectors";
import {Search} from "./components/Search";

function App() {
    const products = useSelector(selectProducts)
    const filters = useSelector(selectActiveFilters)
    const filteredProducts = setFilteredProducts(products, filters)
    return (
      <div className="container ">
          <div className="products-list__inner" data-element="mainWrapper">
              <Sidebar />
              <div className="products products-list__main">
                  <Search />
                  <div className="products__search-res">
                      <p>
                          {filteredProducts.length} results found
                      </p>
                      <button className="btn btn--only-img btn--violet">
                          <img src={heart} alt={"heart"}/>
                      </button>
                  </div>
                  <CardList products={products} filteredProducts={filteredProducts}/>
              </div>
          </div>
      </div>
  )
}

export default App;

