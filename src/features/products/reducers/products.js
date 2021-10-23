import {CHANGE_WISHLIST_STATUS, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_WISHLIST, CLEAR_CART} from '../actions/actions.js'

export function products(state = productsInitialState, action) {
    switch (action.type) {
        case CHANGE_WISHLIST_STATUS:
            return state.map((product) =>
                product.id === action.payload ? {...product, isWished: !product.isWished} : product
            )
        case CLEAR_WISHLIST:
            return state.map(product => {
                return {
                    ...product,
                    isWished: false
                }
            })
        default:
            return state
    }
}

export const productsInitialState = [
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
        "brand": "acer",
        "isWished": false
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
        "brand": "acer",
        "isWished": false
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
        "brand": "acer",
        "isWished": false
    },
    {
        "id": "ym1uizveicakr9kjkav",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big_tile/12593655.jpg"
        ],
        "title": "RAM Kingston SODIMM DDR4-2666 8192MB PC4-21300 (KVR26S19S8/8)",
        "rating": 2.49,
        "price": 1250,
        "category": "ram",
        "brand": "kingston"
    },
    {
        "id": "4qh0zq6skm4kr9kjkav",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big_tile/11107145.jpg"
        ],
        "title": "RAM Kingston DDR4-2666 8192MB PC4-21300 (KVR26N19S8/8)",
        "rating": 5,
        "price": 1075,
        "category": "ram",
        "brand": "kingston"
    },
    {
        "id": "4xij1knhfoukr9kjkav",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big_tile/59014647.jpg"
        ],
        "title": "Звуковая карта Asus Xonar U7 MKII",
        "rating": 5,
        "price": 2670,
        "category": "sound_cards",
        "brand": "asus"
    },
    {
        "id": "54mt82049zlkr9kjkav",
        "images": [
            "https://content1.rozetka.com.ua/goods/images/big_tile/10687036.jpg",
            "https://content2.rozetka.com.ua/goods/images/big_tile/10687086.jpg"
        ],
        "title": "Звуковая карта Asus Strix Soar (90YB00J0-M1UA00)",
        "rating": 4.63,
        "price": 2400,
        "category": "sound_cards",
        "brand": "asus"
    },
    {
        "id": "js87e5b8rcqkr9kjkav",
        "images": [
            "https://content1.rozetka.com.ua/goods/images/big_tile/46331525.jpg"
        ],
        "title": "Звуковая карта Asus Xonar U5",
        "rating": 2.83,
        "price": 1800,
        "category": "sound_cards",
        "brand": "asus"
    },
    {
        "id": "bp7satk44xrkr9kjkav",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big/21329737.jpg"
        ],
        "title": "Звуковая карта Asus Xonar SE (90YA00T0-M0UA00)",
        "rating": 4.26,
        "price": 1600,
        "category": "sound_cards",
        "brand": "asus"
    },
    {
        "id": "w9jfp9mn1zdkr9kjkav",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big/21329571.jpg"
        ],
        "title": "Звуковая карта Asus Xonar U7 MKII (90YB00KB-M0UC00)",
        "rating": 4.27,
        "price": 2800,
        "category": "sound_cards",
        "brand": "asus"
    },
    {
        "id": "qcufkbjnewkr9kjkav",
        "images": [
            "https://content.rozetka.com.ua/goods/images/big_tile/10975625.jpg"
        ],
        "title": "Адаптер Dynamode USB C-Media 108 7.1 каналов, алюминий Черная (USB-SOUND7-ALU black)",
        "rating": 1.17,
        "price": 126,
        "category": "sound_cards",
        "brand": "dynamode"
    },
]