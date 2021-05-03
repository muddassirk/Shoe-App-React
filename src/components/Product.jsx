import React from 'react'
import Shoe from '../shoe.json'
import '../App.css'
import { Link } from 'react-router-dom';

export default function Product() {
    console.log(Shoe);
    console.log(Object.keys(Shoe));
    return (
        <div>
            <h1>Welcome to prodcuts</h1>
            <div className='products'>
                {
                    Object.keys(Shoe).map(keyNames => {
                        const shoes = Shoe[keyNames]
                        return (
                            <Link
                                key={keyNames}
                                className='div'
                                to={`/product/${keyNames}`}
                            >

                                    <h1>{shoes.name}</h1>
                                    <img src={shoes.img} height={150} alt="" />
                            </Link>
                        )

                    })
                }
            </div>
        </div>
    )
}
