import { useEffect, useState } from 'react'
import Header from './parts/header';
import Cards from './parts/cards';
import Home from './parts/Home';
import Menu from './parts/Menu';

function App() {
  const [count, setCount] = useState(0);
  const [sideCount, setSideCount] = useState(0);

  const classW = 'bg-slate-400 px-5 py-5 rounded hover:bg-sky-700 duration-500 w-[1000px]'
  const head = [
    {title: 'Title1'},
    {title: 'Title2'},
    {title: 'Title3'},
  ]

  useEffect(() => {
    setSideCount(count)
  }, [count])

  const addCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div className='mx-auto md:w-[75vw] lg:w-[75vw] mt-8'>
        <Home />
        <Menu />
      </div>
    </>
  )
}

export default App
