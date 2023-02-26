import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../styles/video.module.css';

const Video = ({ item }) => {
    const { youtubeID, noq, title } = item;
    // console.log(item);

    return (
        noq > 0 ? <Link to={ `/quiz/${ youtubeID }` }>
            <div className={ classes.video }>
                <img src={ `http://img.youtube.com/vi/${ youtubeID }/maxresdefault.jpg` } alt={ title } />
                <p>{ title }</p>
                <div className={ classes.qmeta }>
                    <p>{ noq } Questions</p>
                    <p>Total Points : { noq * 5 }</p>
                </div>
            </div>
        </Link>
            :
            <div className={ classes.video }>
                <img src={ `http://img.youtube.com/vi/${ youtubeID }/maxresdefault.jpg` } alt={ title } />
                <p>{ title }</p>
                <div className={ classes.qmeta }>
                    <p>{ noq } Questions</p>
                    <p>Total Points : { noq * 5 }</p>
                </div>
            </div>
    );
};

export default Video;
