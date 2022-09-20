import React from 'react';

const PersonalCard = () => {
    return (
        <div className="card card-side bg-neutral p-0 text-center m-5 xl:w-1/6 xl:h-full h-56 w-screen">
            <figure><img className="h-full" src="https://img1.od-cdn.com/ImageType-100/5835-1/%7B1826793D-98B7-4CB3-B503-6F32034047AA%7DImg100.jpg" alt="Image" /></figure>
            <div className="card-body flex justify-start items-center">
                <label className="label cursor-pointer">
                    <span className="label-text pr-3">Readed?</span>
                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                </label>
                <h2 className="card-title text-lg font-bold">MBA PERSONAL</h2>
                <p className="text-sm font-medium whitespace-nowrap">JOSH KAUFMANN</p>
                <div className="card-actions justify-center">
                    <div className='flex gap-2 pt-2 indicator'>
                        <span className="indicator-item badge badge-ghost indicator-bottom">E</span> 
                        <span className="badge badge-outline text-primary">10/10</span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalCard;
