import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { ImportSbData } from '../../api/supabase';
import PageSearch from '../SearchBooks/PageSearch';

const Books = () => {
    const [dataBook, setDataBook] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        ImportSbData().then((data) => {
            setDataBook(data);
            setLoading(false);
        }).catch((err) => {
            setDataBook(['error']);
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
                            dataBook[0] = 'error' ?
                                <h1>Error on call the data</h1> :
                                <PageSearch data={dataBook} />
                        }
                    </div>
            }
        </>
    );
};

export default Books;
