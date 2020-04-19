import React from 'react';

const PreviewPicture = (props) => {
    const { imageURL } = props;
    return (
        <img className="img-fluid mb-2 mt-2" src={imageURL}/>
    );
};  

export default PreviewPicture;