import React, { useContext } from 'react';
import { AppCtx } from '../../App';
import LoginButton from '../Login/LoginButton';
import PersonalCard from '../PersonalBooks/PersonalCard';
import Stats from '../Stats';

const PersonalBooks = () => {
    const { session } = useContext(AppCtx) as { session: boolean };
    return (
        <section>
            {session == true ?
                <div>
                    <Stats />
                    <article className='flex flex-wrap w-full h-full px-10 py-5'>
                        <PersonalCard />
                        <PersonalCard />
                        <PersonalCard />
                        <PersonalCard />
                        <PersonalCard />
                        <PersonalCard />
                        <PersonalCard />
                        <PersonalCard />
                    </article>
                </div>
                :
                <div>
                    <h1 className='pb-5'>To see your personal List</h1>
                    <LoginButton style=''/>
                </div>
            }
        </section>
    );
};

export default PersonalBooks;
