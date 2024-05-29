import React from 'react';
import "../Css/Css.css";
import DetailPage from '../pages/DetailPage';

const DetailPageWrapper = ({ match }) => {
    const { id } = match.params;
    return <DetailPage selectedProductId={parseInt(id, 10)} />;
};

export default DetailPageWrapper