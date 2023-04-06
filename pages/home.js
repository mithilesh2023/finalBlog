import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const home = () => {
  return (
    <div className='flex'>
        <div className='w-1/5'>
            <ul>
                <li><Link href="/">React</Link></li>
                <li><Link href="/">JavaScript</Link></li>
                <li><Link href="/">Php</Link></li>
                <li><Link href="/">Laravel</Link></li>
                <li><Link href="/">Python</Link></li>
                <li><Link href="/">Nextjs</Link></li>
            </ul>
        </div>
        <div className='w-4/5 m-2'>
            <div className='flex border border-black rounded p-2 gap-2 mb-3'>
                <Image src={``} alt="img" width={30} height={40} className='w-28 rounded h-[150px]' />
                <div className=''>
                    <p className='text-3xl font-semibold text-slate-600'>How To Learn ReactJS: A Complete Guide For Beginners.</p>
                    <p className='text-xl'>Every front-end developer and web developer knows how frustrating and painful it is to write the same code at multiple places. If they need to add a button on multiple pages they are forced to do a lot of code. Developers using other frameworks face the challenges to rework most codes even when crafting components that changed frequently. Developers wanted a framework or library which allow them to break down complex components and reuse the codes to complete their projects faster. Here React comes in and solved this problem. </p>
                    <input className='bg-orange-500 float-right  text-xl rounded w-32 px-2 py-3' value='Read More'/>
                </div>
            </div>
            <div className='flex border border-black rounded p-2 gap-2'>
                <Image src="/download.jpg" alt="img" width={30} height={40} className='w-28 rounded h-[150px]' />
                <div className=''>
                    <p className='text-3xl font-semibold text-slate-600'>This is my headeline of blog.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur similique voluptatem aspernatur repellat optio hic deserunt. Esse ipsam vel minima, repellat totam aspernatur architecto voluptas hic. Dicta veniam ad, perspiciatis explicabo ullam a fugit. Porro corrupti quo accusantium nulla! Suscipit quaerat eos consectetur rem, officiis ad eum voluptate nisi.</p>
                    <input className='bg-orange-500 float-right  text-xl rounded w-32 px-2 py-3' value='Read More'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default home