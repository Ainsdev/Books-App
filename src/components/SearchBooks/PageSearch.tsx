import { PostgrestError } from '@supabase/supabase-js';
import React from 'react';
import Card from './Card';

interface Props {
    data: any[];
}
type item = {
    id: React.Key | null | undefined; type: string; categorie: string; title: string; author: string; image: string | undefined; date: string; description: string; valoration: number;
}
const App: React.FC<Props> = ({ data }) => {
    return (
        <div className="carousel-item h-max  px-5 flex flex-col lg:flex-row flex-wrap justify-center items-center">
            {
                data.map((item: item,index) => {
                    return (
                        <Card
                            id={index}
                            key={index}
                            type={item.type}
                            categorie={item.categorie}
                            name={item.title}
                            author={item.author}
                            image={item.image}
                            date={item.date}
                            description={item.description}
                            valoration={item.valoration}
                            pages={504}
                        />
                    )
                })
            }
        </div>
    );
};

export default App;
