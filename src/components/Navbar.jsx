import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-black '>
            <div className='flex justify-center p-2'>
                <img src="/logo.svg" alt="" />
            </div>
            <div className='flex p-2'>
                <div className='w-1/3'>
                    <button>
                        <img src="/menu.svg" alt="" />
                    </button>
                </div>
                <div className='w-1/3 flex justify-center gap-x-8'>
                    <img src="/movie.svg" alt="" />
                    <img src="/serie.svg" alt="" />
                </div>
                <div className='w-1/3 flex justify-end'>
                    <img src="/profile.svg" alt="" />
                </div>
            </div>
        </div>

    )
}
