import React, { useState } from "react";
import "./TweetBox.css"
import { Avatar, Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Roman Zhurakivskyi",
            username: "romanzhu1__1",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "AccountCircleIcon",
        });

        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar Icon={AccountCircleIcon} />
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} placeholder="What's happening?" type="text"></input>
                </div>
                <input 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"></input>
                <Button 
                onClick={sendTweet}
                type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
    
}

export default TweetBox;