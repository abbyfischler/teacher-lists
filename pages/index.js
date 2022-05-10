import Nav from "../components/nav";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Link from "next/link";
import Card from "../components/card";


export default function Home() {

  const wishlists = useSWR("/api/all", fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black">
  
      <Nav></Nav>
      <main>
        <section>
          <p className="text-center my-20  w-2/3 mx-auto text-xl m-2">
            Schools and school districts don’t always provide enough funding for
            teachers to provide everything they need for their students.
            Teachers end up spending their own money on buying supplies for
            their classrooms. Fortunately, there are people out there who want
            to help these teachers out. Teachers lists provide these people with
            a way to help the teachers. This website will store the amazon
            teacher’s wish list!
          </p>
        </section>
        <section className="bg-geruleancrayola justify-center dark:text-black py-10 flex flex-row space-x-4">
          <h1 className="text-center text-5xl m-4 ">
            Are you a teacher who wants to add your list?
          </h1>
          <Link href="/makelists">
            <button className="bg-white p-3 rounded-md text-2xl w-fitcontent dark:text-maroonx-11 border border-black">
              Make your list here!
            </button>
          </Link>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 my-10">
          {wishlists?.map((props) => (
           <Card key={props.id} {...props} />
          ))}
        </section>
      </main>
    </div>
  );
}
