import React from 'react';
import './static/all.css';

export default function img(){
    return (
        <>
        <div className='tweetFeeds'>
            <a className="twitter-timeline" data-width='500' data-height='600' data-theme='dark' href="https://twitter.com/AksharPathak?ref_src=twsrc%5Etfw">Tweets by AksharPathak</a>
            <a className="twitter-timeline" data-width='500' data-height='600' href="https://twitter.com/dan_abramov?ref_src=twsrc%5Etfw">Tweets by dan_abramov</a>
        </div>
        <footer class='footer'>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-reddit-square"></i>
        </footer>
        </>
        
    );
}