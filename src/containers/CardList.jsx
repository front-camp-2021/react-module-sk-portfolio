import '../style.css'

import Card from '../components/Сard'
import {useSelector} from "react-redux";
import {selectProducts} from "../features/products/selectors";

export default function CardList() {
    const products = useSelector(selectProducts)
    return (
        <div className="products__inner" data-element="body">
            {
                products.map(product =>
                    <Card
                        key={product.id}
                        {...product}
                    />)
            }
        </div>
    )
}