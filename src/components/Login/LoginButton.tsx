import React, { useState } from 'react';
import { supabase } from '../../api/clientSupaBase';

const LoginButton = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error: any) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <label htmlFor="my-modal-4" className='btn modal-button btn-accent absolute top-0 right-0 sm:mt-10 sm:mr-10 mt-5 mr-5'>Sign In</label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold pb-5">Login only in 30 seconds</h3>
                    {loading ? (
                        <h1 className='text-xl'>Sending magic link...</h1>
                    ) : (
                        <form onSubmit={handleLogin} className="flex flex-col gap-5 items-center ">
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
