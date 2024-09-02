import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import {useCart} from '../../store/useCart';
import {Product} from '../../models/Product';
import {useEffect, useState} from 'react';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'


type ProductItemProps = {
    product: Product;
}

const ProductItem = ({product}: ProductItemProps) => {

    const {cartItems, addToCart, removeAllSelectedItemFromCart, removeOneItemFromCart} = useCart();


    const [itemAvailableInCart, setItemAvailableInCart] = useState(false);
    const [cartItemQuantity, setCartItemQuantity] = useState(0);

    useEffect(() => {
        if (cartItems.filter((item) => item.productId === product.id).length > 0) {
            setItemAvailableInCart(true);
            setCartItemQuantity(cartItems.filter((item) => item.productId === product.id)[0].quantity);
        } else {
            setItemAvailableInCart(false);
            setCartItemQuantity(0);
        }
    }, [cartItems]);


    function handleCartAddition(productId: number) {
        addToCart(productId);
        console.log('Added to cart product with id:  ', productId);
    }

    function handleCartItemRemoval(productId: number) {
        removeAllSelectedItemFromCart(productId);
        console.log('Removed from cart product with id:  ', productId);
    }


    function handleWatchListAddition(productId: number) {
        console.log('Added to watchlist product with id:  ', productId);
    }

    function handleOneItemRemoval(productId: number) {
        removeOneItemFromCart(productId);
        console.log('Removed one item from cart with id:  ', productId);
    }

    return (
        <>
            <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                    <CardMedia
                        sx={{height: 140}}
                        image={product?.image}
                        title={product?.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product?.category}
                        </Typography>
                        <Typography variant="body2" sx={{color: "text.secondary"}}>
                            {product?.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {
                            !itemAvailableInCart &&
                            <Button size="small" variant="contained" color="error"
                                    onClick={() => handleCartAddition(product.id)}>
                                {!itemAvailableInCart ? 'Add To Cart' : 'Add One More To Cart'}
                            </Button>
                        }
                        {

                            itemAvailableInCart &&
                            <>
                                <IconButton onClick={() => handleOneItemRemoval(product.id)}>
                                    <RemoveIcon/>
                                </IconButton>
                                <Typography variant="body2" sx={{color: "text.secondary"}}>
                                    {cartItemQuantity}
                                </Typography>
                                <IconButton onClick={() => handleCartAddition(product.id)}>
                                    <AddIcon/>
                                </IconButton>

                            </>
                        }
                        {
                            itemAvailableInCart &&
                            <Button size="small" variant="outlined"
                                    onClick={() => handleCartItemRemoval(product.id)}>Remove
                                item entirely from Cart</Button>
                        }
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default ProductItem;
