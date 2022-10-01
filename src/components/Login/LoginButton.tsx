import React, { useState } from 'react';
import { supabase } from '../../api/clientSupaBase';


interface LoginButtonProps {
    style: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ style }) => {
    const [loading, setLoading] = useState(0)
    const [email, setEmail] = useState('')
    const ButtonStyle = style + ' btn modal-button btn-accent'
    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        try {
            setLoading(1)
            const { error } = await supabase.auth.signIn({ email })
            if (error) throw error
        } catch (error: any) {
            alert('error al iniciar seesion')
        } finally {
            setLoading(2)
        }
    }
    return (
        <>
            <label htmlFor="my-modal-4" className={ButtonStyle}>Sign In</label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold pb-5">Login only in 30 seconds</h3>
                    {loading != 0 ? (
                        loading == 1 ? <h1 className='text-xl'>Sending magic link...</h1> : <h1 className='text-xl'>Check your email in <a className='link' href='https://mail.google.com/mail/u/0/#inbox'>Go to mail</a></h1>
                    ) : (
                        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-5 items-center ">
                            <input
                                id="email"
                                className="input input-bordered text-center w-full"
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="btn btn-outline w-1/2 " aria-live="polite">
                                Send magic link
                            </button>
                        </form>
                    )}
                </label>
            </label>
        </>
    );
};

export default LoginButton;

