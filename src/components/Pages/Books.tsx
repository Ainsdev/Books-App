import React from 'react';
import PageSearch from '../SearchBooks/PageSearch';

const Books = () => {
    //Aca pasariamos la data de supabase cargada a mi email
    return (
        <div className="h-max carousel carousel-vertical w-screen px-24">
            <PageSearch></PageSearch>
            <PageSearch></PageSearch>
            <PageSearch></PageSearch>
            <PageSearch></PageSearch>
        </div>
    );
};

export default Books;
