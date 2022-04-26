import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { get as fetch } from 'axios'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'


export default function Home() {

  const { register, handleSubmit } = useForm();
  const onSubmit = async (d) => {
    fetch(`/api/create?teachername=${d.teachername}&location=${d.location}&bio=${d.bio}&wishlist=${d.wishlist}`)
    .then(r => alert(r.data));
  }


  const wishlists = useSWR('/api/all', fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black">
      <main>
        <section className="w-1/2 mx-auto bg-gray-200 rounded-xl p-10 mt-16">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
            <label htmlFor="teacherName">Teacher Name (required)</label>
            <input className="bg-gray-200 border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600" type="text" id="teachername" placeholder="Dr. Spell" {...register("teachername", { required: true })} />
            <label htmlFor="location">Location</label>
            <input className="bg-gray-200 border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600" type="text" id="location" placeholder="Los Angeles" {...register("location", { required: true })} />
            <label htmlFor="bio">Bio</label>
            <input className="bg-gray-200 border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600" type="text" id="bio" placeholder="I am a classroom from XXXXXX" {...register("bio", { required: true })} />
            <label htmlFor="wishlist">Wishlist link</label>
            <input className="bg-gray-200 border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600" type="text" id="wishlist" placeholder="amazon.com/" {...register("wishlist", { required: true })} />
            <input type="submit" className="bg-blue-500 text-white py-2 hover:bg-blue-600 rounded-xl font-bold" value="Submit"/>
          </form>
        </section>
       
         
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

