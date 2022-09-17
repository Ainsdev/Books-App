import React, { useContext, useEffect, useState } from 'react';
import { supabase } from '../../api/clientSupaBase';


function LogoutButton() {
    const [session, setSession] = useState<boolean>(true);
    const signOut = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            const { error } = await supabase.auth.signOut()
            if (error) throw error
            alert('Estas Saliendo!!')
        } catch (error: any) {
            alert(error.error_description || error.message)
        } finally {
            setSession(false)
        }
    }
    return (<button onClick={signOut} className='btn btn-outline absolute top-0 right-0 mt-10 mr-10'>Sign Out</button>);
}

export default LogoutButton