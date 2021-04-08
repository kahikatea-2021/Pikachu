import React from 'react'

function Search() {
    return <>
        <div className='flex-auto'>
            <h1 className='pt-2 pb-2 pl-10 bg-red-400 text-white
    xl:text-3xl
    lg:text-xl
    md:text-md
    sm:text-sm'>Find what you are searching...</h1>
            <div className='flex flex-nowrap content-center items-center justify-center'>
                <form className='border-2 border-gray-200 rounded
      border-2 border-gray-200 rounded-2xl
      focus:rounded-2xl focus:border-blue-500 focus:outline-none'>
                    <select className='w-16 
        ml-10
        border-0 focus:outline-none'>
                        <option value="NA">NA</option>
                        <option value="EUW">EUW</option>
                        <option value="EUN">EUN</option>
                        <option value="KR">KR</option>
                        <option value="BR">BR</option>
                        <option value="JP">JP</option>
                        <option value="RU">RU</option>
                        <option value="OCE">OCE</option>
                        <option value="TR">TR</option>
                        <option value="LAN">LAN</option>
                    </select>
                    <input type="text" className='w-96 pl-4 focus:outline-none'
                        placeholder="Search for a username or champion">
                    </input>
                    <submit className='w-36
        border-0 pr-10'>
                        <a href='/blah'>Search</a>
                    </submit>
                </form>
            </div>
        </div>
    </>
}

export default Search
