export default function About() {
  return (
    <>
      <div className="flex flex-col border border-black rounded-md bg-maroonx-11-grad py-8 mx-auto w-3/4 mt-12 items-center text-center">
        <h1 className="flex flex-col-1 center text-7xl m-3 text-white p-4 dark:text-black">
          ABOUT
        </h1>
        <img src="/abby.png" className="w-60 h-60"></img>
        <p className="pt-8 mx-8 p-4 dark:text-black text-xl">
          Hi! I’m Abby Fischler, a high school sophmore from Los Angeles,
          California. Last summer, I saw influencers on social media post
          teacher’s amazon wish list. I wanted to create a website where
          teachers can post their lists for people to help, so I created this
          site! Please email me with any suggestions or for media:
          abigail.fischler@gmail.com! 
        </p>

     
        <h3 className="pt-8 mx-8 p-4"><a href="https://github.com/abbyfischler/teacher-lists">This website is open sourced. Click me to see the Github!</a></h3>
      </div>
    </>
  );
}

