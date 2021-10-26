import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import "./TopBar.style.scss";
import line from "../../Assets/Images/line.svg";
import Avatar from "@mui/material/node/Avatar";
import ProfileMenu from "./ProfileMenu.component";

const TopBar = () => {
    //------------------------------------------------------MENU---------------------------------------------------------

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //---------------------------------------------------------------------------------------------------------------------
    let history = useHistory();
    const userState = useSelector((state) => state.userState.userState);

    return (
        <div className="TopBarContainer">
            <div
                className="LogoContainer"
                onClick={() => {
                    history.push("/");
                }}
            >
                <h3>Foo</h3>
                <h3>deliv</h3>
            </div>
            <div className="NavigationLinks">
                <div className="NavLink">
                    <Typography
                        onClick={() => {
                            history.push("/Foods");
                        }}
                    >
                        Foods
                    </Typography>
                    <img className="HoverLine" src={line} alt="" />
                </div>
                <div className="NavLink">
                    <Typography
                        onClick={() => {
                            history.push("/Drinks");
                        }}
                    >
                        Drinks
                    </Typography>
                    <img className="HoverLine" src={line} alt="" />
                </div>
                <div className="NavLink">
                    <Typography
                        onClick={() => {
                            history.push("/Restaurants");
                        }}
                    >
                        Restaurants
                    </Typography>
                    <img className="HoverLine" src={line} alt="" />
                </div>
                {userState.logIn && userState.logIn.restaurantName ? (
                    <div className="NavLink">
                        <Typography
                            onClick={() => {
                                history.push("/Post");
                            }}
                        >
                            Post
                        </Typography>
                        <img className="HoverLine" src={line} alt="" />
                    </div>
                ) : null}
                {history.location.pathname !== "/SignUp" && !userState.logIn ? (
                    <Button
                        style={{
                            backgroundColor: "#FB7E00",
                            color: "white",
                        }}
                        onClick={() => {
                            history.push("/SignUp");
                        }}
                    >
                        Sign Up
                    </Button>
                ) : history.location.pathname !== "/SignUp" && userState ? (
                    <Avatar
                        alt="Profile Image"
                        src="https://thispersondoesnotexist.com/"
                        onClick={handleClick}
                    />
                ) : null}
                <ProfileMenu
                    open={open}
                    handleClose={handleClose}
                    anchorEl={anchorEl}
                />
            </div>
        </div>
    );
};

export default TopBar;
