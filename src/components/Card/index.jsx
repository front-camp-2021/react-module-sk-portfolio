import 'style.css'
import {useDispatch} from "react-redux";
import {productCardAction, CHANGE_WISHLIST_STATUS, CHANGE_TO_CART} from '../../features/products/actions'
import heart from 'img/icons/heart.svg'
import heartPainted from 'img/icons/heart-painted.svg'
import basket from 'img/icons/bag.svg'
import star from 'img/icons/star.svg'
import crossBasket from 'img/icons/delete-from-cart.svg'
import { Link } from 'react-router-dom';

export default function Card({id, title, images, rating, price, isWished, isCart, category, brand}) {
    const dispatch = useDispatch()



    const toggleToWishList = () => {
        dispatch(productCardAction(CHANGE_WISHLIST_STATUS,id))
    }
    const toggleToCart = () => {
        dispatch(productCardAction(CHANGE_TO_CART,id))
    }
    return (
        <article className="product-card product-card--with-rating">
            <div className="product-card__main">
                <div className="product-card__img">
                    <img src={images[0]} alt={"product"}/>
                </div>
                <div className="product-card__info">
                    <div className="product-card__wr">
                        <div className="product-card__rating">
                              <span>
                                  {rating}
                              </span>

                            <img src={star} alt="rating-star"/>
                        </div>
                        <div className="product-card__price">
                            ${price}
                        </div>
                    </div>
                    <Link to={`/product/${id}`} className="product-card__description">
                        <h3>
                            {title}
                        </h3>
                        <p>
                            Redesigned from scratch and completely revised.
                        </p>
                    </Link>
                </div>
            </div>
            <div className="product-card__btns">
                <button 
                aria-label={isWished ? "remove from wishlist" : "add to wishlist" } 
                className="product-card__btn btn" 
                onClick={toggleToWishList}>
                    <img
                        src={
                            isWished ? heartPainted : heart
                        }
                        alt="heart"/>
                    <span>
                            WISHLIST
                        </span>
                </button>

                <button 
                aria-label={isCart ? "remove from cart" : "add to cart" } 
                className="product-card__btn btn btn--violet" 
                onClick={toggleToCart}>
                    <img
                        src={
                            isCart ? crossBasket : basket
                        }
                        alt="cart"/>
                    <span>
                        {
                            isCart ? "DELETE FROM CART"  : "ADD TO CART"
                        }
                    </span>
                </button>
            </div>
        </article>
    )
}