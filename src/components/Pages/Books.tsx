import { useEffect, useState } from 'react';
import { ImportSbData } from '../../api/supabase';
import PageSearch from '../SearchBooks/PageSearch';

const Books = () => {
    const [dataBook, setDataBook] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        ImportSbData().then((data) => {
            setDataBook(data as any);
            setLoading(false);
        }).catch((err) => {
            setDataBook(err as any);
            setLoading(false);
        })

    }, []);

    return (
        <>
            {
                loading ?
                    <button className="btn loading"></button> :
                    <div className="h-max carousel carousel-vertical w-full">
                        {
                            dataBook.code != null ?
                                <h1>Error: {dataBook.code}</h1> :
                                <PageSearch data={dataBook} />
                        }
                    </div>
            }
        </>
    );
};

export default Books;
