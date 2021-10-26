import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    TextField,
} from "@mui/material";

import TopBar from "../../Components/TopBar/TopBar.component";
import "./ListOfFoods.style.scss";

const FoodsPage = () => {
    return (
        <div>
            <TopBar />
            <div className="SearchField">
                <TextField
                    variant="standard"
                    name="searchFood"
                    label="Search Food"
                    style={{
                        width: "40%",
                    }}
                />
            </div>
            <div className="ListOfFoods">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://picsum.photos/200"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pizza
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pizza discription will be here
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained">
                            Add to Cart
                        </Button>
                        <Button size="small">Order Now</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default FoodsPage;
