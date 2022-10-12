import React, { FC, useState } from 'react';
import Swal from 'sweetalert2';
// import { updateSbData } from '../../api/supabase';
import { PersonalCardProps } from '../../helpers/interfaces';

const PersonalCard: FC<PersonalCardProps> = (props) => {
    const [readed, setReaded] = useState<boolean>(props.read);
    const handleReaded = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        setReaded(!readed);
    }
    const handleAlert = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (e.target !== e.currentTarget) {
            return Swal.fire({
                stopKeydownPropagation: true,
                title: `<strong'>${props.title}</strong>`,
                imageUrl: `${props.image}`,
                imageHeight: 400,
                imageWidth: 300,
                customClass: {
                    title: 'text-white',
                    container: 'bg-base-200 text-base-content rounded-lg',
                    image: 'rounded-lg',
                    popup: 'bg-base-200',
                    confirmButton: 'btn btn-primary',
                    htmlContainer: 'text-base-content ',
                    footer: 'flex flex-col justify-center items-center'
                },
                html:
                    `<b>${props.author}</b>` + '<br />' +
                    `${props.links?.map((link, i) => {
                        return `<a href='${link}' target='_blank'>Link ${i + 1}</a>`
                    })}`,
                footer: `<b>${props.category}</b>` + '<br />' + `<p>${props.description?.substring(0, 200)}...</p>`,
                showCloseButton: true,
                focusConfirm: false,
                preConfirm: () => {
                    Swal.fire({
                        icon: 'info',
                        title: 'We are working on this...',
                    })
                },
                confirmButtonText:
                    `<i class="fa fa-thumbs-up"></i>Edit Valoration: ${props.valoration}/5`,
                confirmButtonAriaLabel: 'Thumbs up, great!',
            })
        }
    }
    return (
        <div onClick={(e) => handleAlert(e)} className="card card-side bg-neutral p-0 text-center m-5 xl:w-1/6 xl:h-full h-56 w-full hover:cursor-pointer">
            < figure > <img className="h-full" src={props.image} alt="Image" /></figure >
            <div className="card-body flex justify-start items-center">
                <div className='badge'>Business</div>
                <label className="label cursor-pointer">
                    <span className="label-text pr-3">Readed</span>
                    <input type="checkbox" onChange={handleReaded} checked={readed} className="checkbox checkbox-primary z-30" />
                </label>
                <h2 className="card-title text-lg font-bold">{props.title}</h2>
                <p className="text-sm font-medium whitespace-nowrap">{props.author}</p>
                <div className="card-actions justify-center">
                    <div className='flex gap-2 pt-2 indicator'>
                        <span className="badge badge-outline text-primary">{props.valoration == null ? 5 : props.valoration}/5</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PersonalCard;
