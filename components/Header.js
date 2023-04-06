import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='bg-teal-400 flex justify-between p-2 items-center'>
            <p className='text-3xl'> Blog</p>
            <ul className='flex gap-3 mr-5'>
                <li><Link href="/" className='text-xl bg-black text-white p-2 rounded items-center'>Home</Link></li>
                <li><Link href="/blog" className='text-xl bg-black text-white p-2 rounded items-center'>Blog</Link></li>
                <li><Link href="/register" className='text-xl bg-black text-white p-2 rounded items-center'>Register</Link></li>
                <li><Link href="/login" className='text-xl bg-black text-white p-2 rounded items-center'>Login</Link></li>
                <li><Link href="/logout" className='text-xl bg-black text-white p-2 rounded items-center'>Logout</Link></li>
            </ul>
    </div>
  )
}

export default Header