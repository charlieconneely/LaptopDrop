import React from 'react';

const PreviewPicture = (props) => {
    const { imageURL } = props;
    return (
        <img className="img-fluid mb-2 mt-2"
        style={{height:'200px'}}
        src={imageURL}
        alt="img preview"/>
    );
};

export default PreviewPicture;
