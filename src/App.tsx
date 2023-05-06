import { useEffect, useState, createContext } from 'react'
import SearchingBook from './components/SearchBooks/Searching'
import Theme from './components/Theme'
import Home from './components/Home';
import LoginButton from './components/Login/LoginButton'
import { supabase } from './api/clientSupaBase'
import LogoutButton from './components/Login/LogoutButton'
import { User } from '@supabase/supabase-js';

interface ctx {
  session: boolean
  dataSession: object | null
}
export const AppCtx = createContext<ctx | null>(null);
function App() {
  const [session, setSession] = useState<boolean>(true);
  const [dataSession, setDataSession] = useState<User | null>(null);
  useEffect(() => {
    if (supabase.auth.user()) {
      setSession(true)
      setDataSession(supabase.auth.user())
    } else {
      setSession(false)
    }
  }, []);
  return (
    <main className=' w-full flex items-center justify-center flex-col overflow mt-0 p-0 scroll-mt-0' >
      <nav className='mt-0 p-0'>
        <Theme />
        {session == true ? <LogoutButton /> : <LoginButton style='absolute top-0 right-0 sm:mt-10 sm:mr-10 mt-5 mr-5' />}
      </nav>
      <header className='flex flex-col gap-8 justify-center items-center py-12'>
        <h1 className='text-5xl font-extrabold first-letter:text-accent'>BG Books</h1>
        <p className='text-md text'> Business & Good Books list </p>
        <SearchingBook />
      </header>
      <section className='w-1/2 h-max mt-5 text-center flex flex-col items-center'>
        <AppCtx.Provider value={{ session: session, dataSession: dataSession }}>
          <Home />
        </AppCtx.Provider>
      </section>
      <div className='absolute bottom-5 right-5 w-36 h-24 bg-black text-white hover:scale-110 rounded-xl shadow-xl'>
        <span>Check My Profile </span>
      </div>
    </main>
  )
}

export default App
