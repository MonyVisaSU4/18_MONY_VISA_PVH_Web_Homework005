import { HomeIcon, BookOpenIcon, FilmIcon, MusicNoteIcon, CameraIcon, HeartIcon, DeviceMobileIcon, GlobeAltIcon, PencilAltIcon, CogIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

export default async function BDetail({ params }) {
    const res = await fetch('https://nextjs-homework005.vercel.app/api/book');
    const data = await res.json();
    params: { id: String }
    const book = data.payload.find((book) => book.id == params.id);
    return <>
        <div className="p-[3%] bg-gray-100">
            <div id="directory" className='w-[50%]'>
                <h3 className='flex justify-evenly text-teal-600'>
                    <HomeIcon className="w-6 h-6" /><Link href={"/homePg"}>Home</Link><strong>-</strong><BookOpenIcon className="w-6 h-6" /><Link href={"/allBK"}>Book Categories</Link><strong>-</strong><BookOpenIcon className="w-6 h-6" /><span>ABCD</span>
                </h3>
            </div>
            <div className='absolute left-[75%]'>
                        <Image
                            src={book.image}
                            alt="cover"
                            width={200}
                            height={300}
                            className='bg-red-500 rounded-3xl'
                        />
            </div>
            <div className='pt-[12%]'>
                <div className='bg-white w-full h-[100vh] rounded-2xl p-[5%]'>
                    <div className='w-full h-full'>
                        <h3 className='text-xl font-bold pt-[2%]'>{book.book_title}</h3>
                        <h4 className='text-lg pt-[1%]'>by <span className='text-teal-600 text-lg font-semibold'>{book.book_author}</span></h4>
                        <p className='pt-[6%]'>{book.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}