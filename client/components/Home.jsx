import React from 'react'
import { Link } from 'react-router-dom'

import pokeball from '../../public/images/'

function Home() {
    return (<>

        <div className='flex-auto'>
            <div className='flex flex-nowrap content-center items-center justify-center bg-gray-200'>
                <div>
                    <Link to={'/Battle'}><img src='../../public/images/pokeball-spinning.gif' /></Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home
