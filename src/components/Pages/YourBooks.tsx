import React from 'react';
import PersonalCard from '../PersonalBooks/PersonalCard';
import Stats from '../Stats';

const PersonalBooks = () => {
    //Validation of session active and then show the page, if session is false return login button
    return (
        <section>
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
        </section>
    );
};

export default PersonalBooks;
