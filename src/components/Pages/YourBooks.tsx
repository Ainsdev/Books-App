import { User } from '@supabase/supabase-js';
import { Key, useContext, useEffect, useState } from 'react';
import { importSbDataById } from '../../api/supabase';
import { AppCtx } from '../../App';
import LoginButton from '../Login/LoginButton';
import PersonalCard from '../PersonalBooks/PersonalCard';
import Stats from '../PersonalBooks/Stats';
import { PostgrestError } from '@supabase/supabase-js';
import { PersonalCardProps } from '../../helpers/interfaces';
// import ImportSbData from '../../api/supabase';

const PersonalBooks = () => {
    const { session, dataSession } = useContext(AppCtx) as { session: boolean, dataSession: User | null };
    const [dataBook, setDataBook] = useState<any>([]);
    useEffect(() => {
        if (session) {
            importSbDataById(dataSession?.id as string).then((data) => {
                setDataBook(data);
            }).catch((err) => {
                setDataBook(err);
            })
        }
    }, []);

    return (
        <section>
            {session == true ?
                <div>
                    <Stats cant={(dataBook.filter((item:any) => item.read == true).length) / dataBook.length} />
                    <article className='flex flex-wrap w-full h-full px-10 py-5'>
                        {
                            typeof dataBook == 'object' ?
                                dataBook.map((book: PersonalCardProps, i: Key | null | undefined) => {
                                    return <PersonalCard
                                        key={i}
                                        type={book.type}
                                        category={book.category}
                                        title={book.title}
                                        author={book.author}
                                        description={book.description}
                                        image={book.image}
                                        read={book.read}
                                        valoration={book.valoration}
                                        links={book.links}
                                    />
                                }) :
                                <h1>Error: {dataBook.code}</h1>
                        }
                    </article>
                </div>
                :
                <div>
                    <h1 className='pb-5'>To see your personal List</h1>
                    <LoginButton style='' />
                </div>
            }
        </section>
    );
};

export default PersonalBooks;
