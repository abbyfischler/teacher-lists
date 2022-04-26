import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import { useForm } from 'react-hook-form'
import { get as fetch } from 'axios'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'


export default function Home() {



  const wishlists = useSWR('/api/all', fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black">
      <Nav></Nav>
      <main>
        
         
          {
            wishlists?.map(({teacherName, location, bio, link}) => (
              <div className='bg-black my-3 w-1/4 bg-opacity-50 rounded py-4 px-8'>
                <p className="font-mono">- {teacherName}</p>
                <p className="font-mono">- {location}</p>
                <p className="font-mono">- {bio}</p>
                <p className="font-mono">- {link}</p>
              </div>
            ))
          }
   
      </main>
    </div>
  )}

