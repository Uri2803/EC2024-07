import { Box, Grid, Typography } from "@mui/material";





const HeaderLeft = ()=>{
    return (
        <Box xs={{minWith: "43%", height: "10vh"}}>
            <Grid container justifyContent="space-between" alignContent="center" spacing={4} sx={{ justifyContent: "space-between", alignContent: "center", bgcolor: '#fbf6f0', with: "43%", height: "10vh"}} >
                <Grid item xs="auto">
                    <Typography >
                        TRANG CHỦ
                    </Typography>
                </Grid>
                <Grid item xs="auto">
                    <Typography >
                        VỀ CHÚNG TÔI
                    </Typography>
                </Grid>
                <Grid item xs="auto">
                    <Typography  >
                        SẢN PHẨM
                    </Typography>
                </Grid>
                <Grid item xs="auto">
                    <Typography >
                        TIN TỨC
                    </Typography>
                </Grid>

            </Grid>
        </Box>
        

    )

}
export default HeaderLeft;