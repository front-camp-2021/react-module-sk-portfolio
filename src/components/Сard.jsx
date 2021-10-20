import '../style.css'

export default function Card(props) {

    const {price} = props
    const {rating} = props
    const {title} = props
    const {images} = props
    return <article className="product-card">
        <div className="product-card__main">
            <div className="product-card__img">
                <img src={images[0]} alt={"logo"}/>
            </div>
            <div className="product-card__info">
                <div className="product-card__wr">
                    <div className="product-card__rating">
                              <span>
                                  {rating}
                              </span>
                        
                    <img src="" alt="rating-star"/>
                </div>
                <div className="product-card__price">
                    ${price}
                </div>
            </div>
            <div className="product-card__description">
                <h3>
                    {title}
                </h3>
                <p>
                    Redesigned from scratch and completely revised.
                </p>
            </div>
        </div>
    </div>
    <div className="product-card__btns">
        <button className="product-card__btn btn">
            <img src="" alt="heart"/>
                <span>WISHLIST</span>
        </button>
        <button className="product-card__btn btn btn--violet">
            <img src="" alt="heart"/>
                <span>ADD TO CART</span>
        </button>
    </div>
</article>
}