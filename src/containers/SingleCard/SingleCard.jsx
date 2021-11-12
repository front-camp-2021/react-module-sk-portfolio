
import axios from "axios";
import Card from "components/Card"
import { URL_PRODUCTS } from "fixtures/index"
import { useEffect } from "react";
import { useParams } from "react-router"
import {useDispatch} from "react-redux"
import "./SingleCard.scss"
import { useSelector } from "react-redux";
import { selectProducts } from "features/products/selector";

export function SingleCard() {
    let { id } = useParams()
    const products = useSelector(selectProducts('all'))
    const dispatch = useDispatch()
    const product = products.find(product => product.id = id)
    useEffect(() => {
        if(id && !product){
        // let cardResponse = await axios.get(`${URL_PRODUCTS}?id=${id}`)
        // let cardProps = await cardResponse.data
        }
    }, [])
    return (
        //    <Card  key={cardProps.id}
        //    {...cardProps}/>
        <></>
    )
}