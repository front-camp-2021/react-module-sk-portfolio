import '../../style.css'
import Card from '../Card'
import {useSelector} from "react-redux";
import {NUMBER_OF_PRODUCTS_ONE_PAGE} from "../../constants"
import {selectCurrentPage} from "../../features/pages/selectors";
import {setProductsPage} from "../../helpers/setProductsPage"

export default function CardList({products}) {
    let currentPage = useSelector(selectCurrentPage)
    const currentPageProducts = setProductsPage(products, currentPage, NUMBER_OF_PRODUCTS_ONE_PAGE)
    return (
            <div className="products__inner" data-element="body">
                {
                    currentPageProducts.map(product =>{
                        return <Card
                            key={product.id}
                            {...product}
                        />})
                }
            </div>
    )
}