import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import SearchingBook from './components/Searching'
import Theme from './components/Theme'
import Stats from './components/Stats'
import Home from './components/Home';
import LoginButton from './components/Login/LoginButton'
import { supabase } from './api/clientSupaBase'
import LogoutButton from './components/Login/LogoutButton'


function App() {
  const [session, setSession] = useState<boolean>(false);
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      !session ? setSession(false) : setSession(true)
    })
  }, []);
  return (
    <main className='w-[100% flex items-center justify-center flex-col'>
      <nav>
        <Theme />
        {!session ? <LoginButton /> : <LogoutButton />}
      </nav>
      <header className='flex flex-col gap-8 justify-center items-center py-12 mt-10'>
        <h1 className='text-5xl font-bold'>BB Books</h1>
        <SearchingBook placeholder='Search a Book…' style="input input-accent" />
      </header>
      <section className='w-1/2 h-max mt-5 text-center flex flex-col items-center'>
        <Home />
      </section>

    </main>
  )
}

export default App
