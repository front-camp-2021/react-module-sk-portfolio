import '../style.css'

import Card from '../components/Сard'

export default function CardList(props) {
    const {products} = props

    return (
        <div className="products__inner" data-element="body">
            {
                products.map(product => <Card key={product.id} rating={product.rating} images={product.images} price={product.price} title={product.title} />)
            }
        </div>
    )
}