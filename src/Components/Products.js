import React, { useEffect, useState } from 'react'
import ProductItem from './ProductCard'
import { Link, Outlet, useParams } from 'react-router-dom'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Slider from '@mui/material/Slider';

import { useData } from '../DataContext';

import { FaFilter } from 'react-icons/fa'

// for slider
function valuetext(value) {
    return `${value}°C`;
}

const Products = () => {
    const { state, dispatch } = useData();

    const { category } = useParams();

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    useEffect(() => {
        if (!category) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => { dispatch({ type: 'set_both_products', payload: json }) });
        } else {
            fetch(`https://fakestoreapi.com/products/category/${category}`)
                .then(res => res.json())
                .then(json => { dispatch({ type: 'set_both_products', payload: json }) });
        }

    }, [category]);


    useEffect(() => {
        // updating minPrice & maxPrice
        const a = state.allProducts.reduce((min, product) => {
            return product.price < min.price ? product : min;
        }, { price: Infinity });

        setMinPrice(a.price);


        const b = state.allProducts.reduce((max, product) => {
            return product.price > max.price ? product : max;
        }, { price: -Infinity });

        setMaxPrice(b.price);

    }, [state.allProducts])



    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [])


    // for handling sort functionality
    const handleSort = (e) => {
        const sortedProducts = [...state.products]; // Create a copy of the products array

        switch (e.target.value) {
            case '1':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case '2':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case '3':
                sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            case '4':
                sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
                break;
            default:
                break;
        }

        dispatch({ type: 'set_products', payload: sortedProducts })
    }



    // price range slider
    const [value, setValue] = useState([-Infinity, Infinity]);

    const handlePriceRange = (e, newValue) => {
        setValue(newValue);

        const filteredProducts = state.allProducts.filter(a => {
            return a.price >= newValue[0] && a.price <= newValue[1];
        })

        // state.setProducts( filteredProducts );
        dispatch({ type: 'set_products', payload: filteredProducts })
    }



    return (
        <div className='products-container d-flex mt-4'>
            {/* Categories at left */}
            <div className='product-categories ps-4'>
                <b className='muted'>Categories</b>
                <List style={{ width: '17rem' }} component="nav" aria-label="mailbox folders">
                    {categories.map(item => (
                        <>
                            <Link to={`/category/${item}`} className='link-style'>
                                <ListItem button>
                                    <ListItemText primary={item.charAt(0).toUpperCase() + item.slice(1)} />
                                </ListItem>
                            </Link>
                            <Divider style={{ backgroundColor: '#aaaaaa' }} />
                        </>
                    ))}
                </List>
            </div>


            {/*  products grid  */}
            <div className='d-flex flex-column mx-3' style={{ width: '-webkit-fill-available' }}>
                <div className='filters '>

                    {/* Price range */}
                    <b className='muted'>Filters</b>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center' style={{ flex: '1', minWidth: '0' }}>
                            <label style={{ textWrap: 'nowrap' }}>Price range: &nbsp;&nbsp;</label>
                            <Slider
                                getAriaLabel={() => 'Price range'}
                                min={Math.floor(minPrice)}
                                step={1}
                                max={Math.ceil(maxPrice) + 1}
                                value={value}
                                onChange={handlePriceRange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                style={{ width: '50%' }}
                            />
                        </div>

                        {/* Sorting List */}
                        <div class="form-group align-self-end">
                            <label for="customSelect">Sort by: &nbsp;</label>
                            <select class="custom-select" id="customSelect" onChange={handleSort}>
                                <option value="0" selected disabled>---</option>
                                <option value="1">Price: Low to High</option>
                                <option value="2">Price: High to Low</option>
                                <option value="3">Rating: High to Low</option>
                                <option value="4">Rating: Low to High</option>
                            </select>
                        </div>
                    </div>
                </div>



                <div className='options-resp'>
                    {/* <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Link with href
                    </a> */}
                    <a class="filter-btn fw-bold" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <FaFilter className='filter-icon' /> &nbsp;&nbsp;Filter
                    </a>

                    <div class="options-container collapse" id="collapseExample">
                        <div class="card card-body">
                            {/* Categories */}
                            <div className='product-categories product-categories-resp ps-4'>
                                <b className='muted'>Categories</b>
                                <List style={{ width: '17rem' }} component="nav" aria-label="mailbox folders">
                                    <div className='product-categories-resp-flex'>
                                        {categories.map(item => (
                                            <div className='category-flex-item'>
                                                <Link to={`/category/${item}`} className='link-style'>
                                                    <ListItem button>
                                                        <ListItemText primary={item.charAt(0).toUpperCase() + item.slice(1)} />
                                                    </ListItem>
                                                </Link>
                                                <Divider style={{ backgroundColor: '#aaaaaa' }} />
                                            </div>
                                        ))}
                                    </div>
                                </List>
                            </div>

                            {/* Sort */}
                            {/* Sorting List */}
                            <div class="form-group ">
                                <label for="customSelect fw-bold">Sort by:&nbsp;</label>
                                <select class="custom-select" id="customSelect" onChange={handleSort}>
                                    <option value="0" selected disabled>---</option>
                                    <option value="1">Price: Low to High</option>
                                    <option value="2">Price: High to Low</option>
                                    <option value="3">Rating: High to Low</option>
                                    <option value="4">Rating: Low to High</option>
                                </select>
                            </div>

                            {/* Price range slider */}
                            <div className='d-flex align-items-center' style={{ flex: '1', minWidth: '0' }}>
                                <label style={{ textWrap: 'nowrap' }}>Price range: &nbsp;&nbsp;</label>
                                <Slider
                                    getAriaLabel={() => 'Price range'}
                                    min={Math.floor(minPrice)}
                                    step={1}
                                    max={Math.ceil(maxPrice) + 1}
                                    value={value}
                                    onChange={handlePriceRange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    style={{ width: '80vw' }}
                                />
                            </div>

                        </div>
                    </div>

                </div>


                <div className='products-grid my-3'>

                    {/* Products */}
                    {state.products && state.products.map((item) => (
                        <Link to={`/${item.id}`} className='link-style'>
                            <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} rating={item.rating} />
                        </Link>
                    ))}

                    <Outlet />
                </div>
            </div>

        </div>

    )
}

export default Products