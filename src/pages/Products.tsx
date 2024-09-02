import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material';
import {useMutation, useQuery} from '@tanstack/react-query';
import ProductItem from '../components/products/ProductItem';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useCart} from '../store/useCart';
import {Product} from '../models/Product';

async function fetchProducts(): Promise<Product[]> {

    let response = await fetch('https://fakestoreapi.com/products');
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Error while fetching product details')
    }

}

const Products = () => {

    let {isPending, error, data: products} = useQuery(
        {
            queryKey: ['products'],
            queryFn: fetchProducts,
        }
    );


    const {cartItems} =  useCart();
    function handleCartAddition(productId: number) {
        console.log('Added to cart product with id:  ', productId);
    }

    function handleWatchListAddition(productId: number) {
        console.log('Added to watchlist product with id:  ', productId);
    }

    return (
        <Container>
            {/*bar with products and watchlist and cart icon with number of items on the top*/}
            <Container sx={{display: 'inline-flex'}}>



                <h1>Products</h1>
                <IconButton sx={{'margin-left': '80%'}} color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon/>
                    {cartItems.length}
                </IconButton>
            </Container>


            {isPending && <Typography variant="h3">Loading...</Typography>}

            {error && <Typography variant="h3">Error while fetching data</Typography>}

            <Grid container spacing={2}>
                {
                    products?.map((product: Product) => {
                        return (
                            <ProductItem product={product} key={product.id}/>
                        )
                    })
                }
            </Grid>

        </Container>
    );
};

export default Products;
