import React from 'react'

import { Link } from 'react-router-dom'
function Home() {
    return (<>

        <div className='flex-auto'>
            <div className='flex flex-nowrap content-center items-center justify-center bg-gray-200'>
                <div>


                    <Link to={'/Battle'}><img src='../../images/pokeball-spinning.gif' /></Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home
