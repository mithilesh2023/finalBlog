import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import connectMongo from '../utils/connectMongo';
import Post from '../models/postModel';

const index = ({ tests }) => {
  const createTest = async () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const res = await fetch('/api/test/getPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `Post ${randomNum}`,
        // img: `test${randomNum}`,
        content:`test${randomNum}`
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <div className='flex'>
        <div className='w-1/5'>
          <ul className='bg-slate-800 p-3'>
            <li className='hover:bg-slate-600 rounded text-xl text-white'><Link href="/">React</Link></li>
            <li className='hover:bg-slate-600 rounded text-xl text-white'><Link href="/">JavaScript</Link></li>
            <li className='hover:bg-slate-600 rounded text-xl text-white'><Link href="/">Php</Link></li>
            <li className='hover:bg-slate-600 rounded text-xl text-white'><Link href="/">Laravel</Link></li>
            <li className='hover:bg-slate-600 rounded text-xl text-white'><Link href="/">Python</Link></li>
            <li className='hover:bg-slate-600 rounded text-xl text-white'><Link href="/">Nextjs</Link></li>
          </ul>
        </div>
        <div className='w-4/5 m-2'>
          <div className='flex flex-col'>
            {tests.map((post) => (
                <div className='flex-1 flex border border-black rounded p-2 gap-2 mb-3'>
                  <div className='w-3/12'>
                  <Image src={"/"+post.img}  width={150} className='rounded' height={30} alt="img"/>
                  </div>
                  <div className='w-9/12'>
                    <h1 className='text-xl font-semibold text-slate-600 truncate'>
                      <a href=''>
                      {post.title}
                      </a>
                    </h1>
                    <p className='text-md'>{post.content.substr(0,200)}...</p>
                    <input className='bg-orange-500 float-right  text-xl rounded w-32 px-2 py-3' value='Read More &rarr;' />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default index
export const getServerSideProps = async () => {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('FETCHING DOCUMENTS');
    const tests = await Post.find();
    console.log('FETCHED DOCUMENTS');
    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};