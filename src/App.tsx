import { useEffect, useState, createContext } from 'react'
import './App.css'
import SearchingBook from './components/SearchBooks/Searching'
import Theme from './components/Theme'
import Home from './components/Home';
import LoginButton from './components/Login/LoginButton'
import { supabase } from './api/clientSupaBase'
import LogoutButton from './components/Login/LogoutButton'
import React from 'react'

interface ctx {
  session: boolean
}
export const AppCtx = createContext<ctx | null>(null);
function App() {
  const [session, setSession] = useState<boolean>(true);
  useEffect(() => {
    if (supabase.auth.user()) {
      setSession(true)
      console.log(supabase.auth.user())
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
        <h1 className='text-5xl font-extrabold first-letter:text-accent'>BB Books</h1>
        <SearchingBook />
      </header>
      <section className='w-1/2 h-max mt-5 text-center flex flex-col items-center'>
        <AppCtx.Provider value={{ session: session }}>
          <Home />
        </AppCtx.Provider>
      </section>
    </main>
  )
}

export default App
