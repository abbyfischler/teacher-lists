import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
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
  <p className="text-center m-20 text-base">Schools and school districts don’t always provide enough funding for teachers to provide everything they need for their students. Teachers end up spending their own money on buying supplies for their classrooms. Fortunately, there are people out there who want to help these teachers out. Teachers lists provide these people with a way to help the teachers. This website will store the amazon teacher’s wish list!</p>
</section>
<section className="bg-gamboge p-10 flex flex-col justify-center">
<h1 className="text-center text-5xl m-4">Are you a teacher who wants to add your list?</h1>
<Link href="/makelists">
  <button className="bg-white p-3 rounded-md text-2xl w-fitcontent mx-auto">Make lists!</button>
</Link>
</section>

        {wishlists?.map(({ teacherName, location, bio, link }) => (
          <div className="bg-black my-3 w-1/4 bg-opacity-50 rounded py-4 px-8">
            <p className="font-mono">- {teacherName}</p>
            <p className="font-mono">- {location}</p>
            <p className="font-mono">- {bio}</p>
            <p className="font-mono">- {link}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
