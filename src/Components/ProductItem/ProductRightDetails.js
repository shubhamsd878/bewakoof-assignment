import React from 'react'
import { FaStar } from 'react-icons/fa'
import { BsCurrencyRupee } from 'react-icons/bs'
import Divider from '@mui/material/Divider';

import { Box, IconButton } from '@mui/material';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import {AiOutlineHeart} from 'react-icons/ai'


const ProductRightDetails = ({ product }) => {
    const { id, title, price, description, category, image, rating } = product

    return (
        <div className='product-item-details ms-5'>
            <h4 className='title'>{title}</h4>
            <p className='description '>{description}</p>
            {rating && (<span className='rating fw-bold'> <FaStar color='gold' />&nbsp;{rating.rate}</span>)}

            <div className='mt-4'>
                <h4 className='fw-bold ' style={{ display: 'inline' }}><BsCurrencyRupee size={16} />{price} </h4>
                <span className='high-price'>{price * 4} </span>
                &nbsp;&nbsp;
                <h5 className='d-inline text-success'>75% OFF</h5>
            </div>

            <Divider className='mt-2' style={{ backgroundColor: '#aaaaaa', height: '0.2rem ' }} />

            {/* <br /> */}
            <div className='mt-3'>
                <b className='small '>SELECT SIZE</b>

                <div className='d-flex'>

                    <Box
                        p={3} // Padding
                        m={2} // Margin
                        border={1}
                        borderRadius={1}
                        borderColor="#cccccc"
                        color="#cccccc"
                    >
                        S
                    </Box>
                    <Box
                        p={3} // Padding
                        m={2} // Margin
                        border={1}
                        borderRadius={1}
                        borderColor="#cccccc"
                        color="#cccccc"
                    >
                        M
                    </Box>
                    <Box
                        p={3} // Padding
                        m={2} // Margin
                        border={1}
                        borderRadius={1}
                        borderColor="#000000"
                    >
                        L
                    </Box>
                    <Box
                        p={3} // Padding
                        m={2} // Margin
                        border={1}
                        borderRadius={1}
                        borderColor="#000000"
                    >
                        XL
                    </Box>
                    <Box
                        p={3} // Padding
                        m={2} // Margin
                        border={1}
                        borderRadius={1}
                        borderColor="#cccccc"
                        color="#cccccc"
                    >
                        2XL
                    </Box>
                </div>
            </div>

            <div className='mt-3'>
                <b className='text-danger small'>FEW LEFT</b>
                <div className='d-flex'>
                    <Box 
                    // marginRight={2}
                    // className='p-3'
                    padding={'0.8rem 2rem 0.8rem 1rem'}
                    backgroundColor={'#ffc524'}
                    >
                        <IconButton color="primary" aria-label="Add to Bag">
                            {/* <PiShoppingBag color='black'/> */}
                            <AddShoppingCart style={{ color: 'black' }} />
                        </IconButton>
                        <span className='small fw-bold'>ADD TO BAG</span>
                    </Box>
                    <Box
                    className='ms-2'
                    padding={'0.8rem 2rem 0.8rem 1rem'}
                    border={'2px solid #cccccc'}
                    >
                        <IconButton color="secondary" aria-label="Add to Wishlist">
                            {/* <Favorite style={{ color: 'black' }}/> */}
                            <AiOutlineHeart color='#999999'/>
                        </IconButton>
                        <span className='small fw-bold'>Add to Wishlist</span>
                    </Box>
                </div>
            </div>

        </div>
    )
}

export default ProductRightDetails