import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useVideoList from '../../hooks/useVideoList';
import Video from './Video';
const Videos = () => {
    const [page, setPage] = useState(1)
    const { loading, error, videos } = useVideoList(page);
    // console.log(videos);







    return (
        <div>
            {
                videos.length > 0 &&
                (<InfiniteScroll dataLength={ videos.length } hasMore={ true } next={ () => setPage(page + 4) }>
                    { videos.map((item, idx) => <Video key={ idx } item={ item } />) }
                </InfiniteScroll>)
            }
            { !loading && videos.length === 0 && <div>No data found!</div> }
            { error && <div>Error found!</div> }
            { loading && <div>...Loading!</div> }
        </div>
    );
};

export default Videos;
