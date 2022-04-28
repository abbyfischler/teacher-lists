import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Link from 'next/link';  


export default function Home() {
  const wishlists = useSWR("/api/all", fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black">
      <Nav></Nav>
      <main>
<section>
  <p className="text-center my-20 text-base w-2/3 mx-auto">Schools and school districts don’t always provide enough funding for teachers to provide everything they need for their students. Teachers end up spending their own money on buying supplies for their classrooms. Fortunately, there are people out there who want to help these teachers out. Teachers lists provide these people with a way to help the teachers. This website will store the amazon teacher’s wish list!</p>
</section>
<section className="bg-gamboge p-10 flex flex-col justify-center">
<h1 className="text-center text-5xl m-4">Are you a teacher who wants to add your list?</h1>
<Link href="/makelists">
  <button className="bg-white p-3 rounded-md text-2xl w-fitcontent mx-auto">Make your list here!</button>
</Link>
</section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16 my-10">
        {wishlists?.map(({ teacherName, location, bio, link, id }) => (
          <div className="flex flex-col bg-orange-grad rounded-xl py-4 px-8 text-center border border-black" key={id}>
            <p className="font-sans text-4xl font-bold">{teacherName}</p>
            <p className="font-sans text-xl">{location}</p>
            <p className="font-sans">{bio}</p>
            <a href={link} className="font-sans bg-white rounded w-1/4 mx-auto p-3 m-2 align-center text-maroonx-11">Link</a>
          </div>
        

        ))}
        </section>
      </main>
    </div>
    
  );
}
