import {Box, Divider, Typography} from "@mui/material"

const Footer = function(){

    const copyrightYear: string = '2024';

    return(
        <Box>
            <Divider/>
            <Typography variant="body2" gutterBottom>
                Copyright {copyrightYear} | My Evolving App ©️
            </Typography>
        </Box>
    )
}


export default Footer
