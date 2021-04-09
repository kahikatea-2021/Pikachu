import React from 'react'
import {Link} from 'react-router-dom'

function PokemonHeader() {
  return (<>
    <div className='
    text-center text-black
    p-10 bg-yellow-300 flex
    h-auto w-auto
    sm:text-xl
    md:text-2xl
    lg:text-4xl
    xl:text-6xl
    2xl:text-6xl'>
      <div className='flex-1 w-auto'>
        <h1 className=''><Link to='/'>Battle Academy</Link></h1>
      </div>

      {/* <div className='md:flex items-center justify-end md:flex-1 lg:w-0'>
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-400 hover:bg-blue-700">
          Leaderboards
        </a>
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-400 hover:bg-blue-700">
          User Management
        </a>
      </div> */}


      {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Create Account
        </a>
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Log In
        </a>
      </div> */}
    </div>
  </>
  )
}

export default PokemonHeader
