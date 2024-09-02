import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material';
import {useMutation, useQuery} from '@tanstack/react-query';


type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;

}

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

    function handleCartAddition(productId: number) {
        console.log('Added to cart product with id:  ', productId);
    }

    function handleWatchListAddition(productId: number) {
        console.log('Added to watchlist product with id:  ', productId);
    }

    return (
        <Container>
            <h1>Products</h1>

            {isPending && <Typography variant="h3">Loading...</Typography>}

            {error && <Typography variant="h3">Error while fetching data</Typography>}

            <Grid container spacing={2}>
                {
                    products?.map((product: any) => {
                        return (
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
                                        <Button size="small" variant="contained" color="error" onClick={() => handleCartAddition(product.id)}>Add To Cart</Button>
                                        <Button size="small" variant="outlined" onClick={()=> handleWatchListAddition(product.id)}>Add to Wishlist</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Container>
    );
};

export default Products;
