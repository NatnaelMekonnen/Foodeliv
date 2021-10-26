import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import { AddRounded, ImageRounded } from "@mui/icons-material";

import TopBar from "../../Components/TopBar/TopBar.component";
import "./PostPage.style.scss";

const PostPage = () => {
    const uploadRef = useRef();
    // const formData = new FormData();
    const [selectedImage, setSelectedImage] = useState();

    const SelectImage = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    // const UploadImage = () => {
    //     formData.append("image", selectedImages, selectedImages.name);
    // };

    return (
        <div className="PostPage">
            <TopBar />
            <div className="UploadDiv">
                <div className="ImagesContainer">
                    <div className="ImagesHolder">
                        {selectedImage ? (
                            <img
                                src={
                                    "http://localhost:3000/" +
                                    selectedImage.name
                                }
                                alt={selectedImage.name}
                            />
                        ) : (
                            <ImageRounded />
                        )}
                    </div>
                    <Button
                        onClick={() => {
                            uploadRef.current.click();
                        }}
                        startIcon={<AddRounded />}
                    >
                        Add Image
                    </Button>
                    <input
                        hidden
                        type="file"
                        ref={uploadRef}
                        onChange={SelectImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default PostPage;
