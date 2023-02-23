import React from 'react';
import classes from '../../styles/videos.module.css';
import Video from './Video';

const Videos = () => {

    return (
        <div className={ classes.videos }>
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => <Video key={ idx } />)
            }

        </div>
    );
};

export default Videos;
