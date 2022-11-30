import React from 'react';
import "./Widgets.css";
import { 
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type="text" />
            </div>

            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1596549343825100800"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="romanzhu1__1"
                options={{ height: 400 }}
                />

                <TwitterShareButton
                url={"https://github.com/roman1923"}
                options={{ text: "programming is awesome", via: "romanzhu1__1" }}
                />
            </div>
        </div>
    );
}

export default Widgets;