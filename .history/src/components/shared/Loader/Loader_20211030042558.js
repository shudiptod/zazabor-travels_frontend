import React from 'react';

const Loader = () => {
    return (
        <div>
            <div style={{width:100%;height:0;padding-bottom:100%;position:relative}}>
                <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="100%" height="100%"
                    style={{position:absolute}} frameBorder="0" class="giphy-embed" allowFullScreen>
                </iframe>
            </div>
            <p>
                <a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg">via GIPHY</a>
            </p>
        </div >
    );
};

export default Loader;