import React from 'react'
import Star from "react-rating-stars-component"
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
    return (
        <>
            <div className='shadow-lg rounded-xl duration-300 hover:shadow-md hover:scale-110'>
                <Link to={`product/${product._id}`} className="">
                    <div className="flex justify-start">
                        <strong className="absolute h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> New </strong>
                    </div>

                    <img
                        alt={product.name}
                        src={product.images[0].url}
                        className="object-cover w-full h-60"
                    />

                    <h5 className="bg-white pt-4 px-4 text-md text-black/90">
                        {product.name}
                    </h5>

                    <div className="flex items-center  rounded-lg justify-between font-bold px-4 py-4 bg-white">

                        <div className='flex'>
                            <Star
                                name='rate'
                                value={product.ratings}
                                edit={false}

                            />
                            <span className='ml-2 py-1 text-sm text-sky-400 font-medium tracking-wide hover:text-sky-500 hover:underline'>
                                ({product.numOfReviews})
                            </span>
                        </div>
                        <p className="m-1 text-lg text-gray-500 font-semibold
                    ">
                            {`$${product.price}`}
                        </p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card