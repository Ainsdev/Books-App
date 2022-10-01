import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/SearchBooks/Card'
import SearchingBook from './components/SearchBooks/Searching'
import Theme from './components/Theme'
import Stats from './components/Stats'
import Home from './components/Home';
import LoginButton from './components/Login/LoginButton'
import { supabase } from './api/clientSupaBase'
import LogoutButton from './components/Login/LogoutButton'


function App() {
  const [session, setSession] = useState<boolean>(true);
  useEffect(() => {
    if (supabase.auth.user()) {
      setSession(true)
    } else{
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
        <Home />
      </section>
    </main>
  )
}

export default App
