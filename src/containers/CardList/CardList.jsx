import '../../style.css'
import Card from '../../components/Сard'
import {useSelector} from "react-redux";
import {Pagination} from "../../components/pagination/Pagination";
import {NUMBER_OF_PRODUCTS_ONE_PAGE} from "../../components/pagination/constants"
import {selectCurrentPage} from "../../features/pages/selectors";
import {numberOfPages} from "./helpers/numberOfPages";
import {setProductsPage} from "./helpers/setProductsPage"

export default function CardList({products, filteredProducts}) {

    let {id} = useSelector(selectCurrentPage)
    const productPage = setProductsPage(filteredProducts, id, NUMBER_OF_PRODUCTS_ONE_PAGE)
    return (
        <>
            <div className="products__inner" data-element="body">
                {
                    productPage.map(product =>
                        <Card
                            key={product.id}
                            {...product}
                        />)
                }
            </div>
            <Pagination numderOfPages={numberOfPages(products, NUMBER_OF_PRODUCTS_ONE_PAGE)}/>
        </>
    )
}