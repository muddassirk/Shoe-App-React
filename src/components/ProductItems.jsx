import React from 'react'
import { useParams } from 'react-router'
import Shoe from '../shoe.json'


export default function ProductItems() {

    const { id } = useParams()
    const shoe = Shoe[id]
    console.log(shoe);
    if (!shoe) return <h1>Product not Found</h1>

    return (
        <div>
            this is product items
            <div
                className='div'
            >

                <h1>{shoe.name}</h1>
                <img src={shoe.img} height={500} alt="" />
            </div>
        </div>
    )
}
