import React from 'react'
import { FaStar } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCurrencyRupee } from 'react-icons/bs'


const ProductCard = (props) => {
    // console.log( JSON.stringify(props) )
    return (
        <div>

            <div class="card product-card">
                <div>
                    <img src={props.image} class="card-img-top product-card-img-top" alt="..." />
                    <div className='overlay-rating small fw-bold'><FaStar color='gold' />&nbsp;&nbsp;{props.rating.rate}</div>
                </div>
                <div class="card-body d-flex">
                    <div>
                        <h6 class="card-title text-muted single-line-ellipsis">{props.title}</h6>
                        <p class="small single-line-ellipsis">{props.description}</p>
                        <h4 style={{display:'inline'}}><BsCurrencyRupee size={16}/>{props.price} </h4><span className='high-price'>{props.price * 4}</span>
                    </div>
                    <AiOutlineHeart size={57} color='#999999' />
                </div>
            </div>
        </div>
    )
}

export default ProductCard












// import React from 'react'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// const ProductCard = (props) => {
//     // console.log( JSON.stringify(props) )
//     return (
//         // <div>{props.id}</div>
//         <div>

//             <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                     sx={{ height: 350 }}
//                     // image="/static/images/cards/contemplative-reptile.jpg"
//                     image={props.image}
//                     title="green iguana"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         Lizard
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         Lizards are a widespread group of squamate reptiles, with over 6,000
//                         species, ranging across all continents except Antarctica
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small">Share</Button>
//                     <Button size="small">Learn More</Button>
//                 </CardActions>
//             </Card>


//         </div>
//     )
// }

// export default ProductCard