export default function Card({ teacherName, location, bio, link, image }) {
  return (
      <>
          <div className="flex flex-col space-y-2 bg-orange-grad  dark:bg-gamboge rounded-xl py-4 px-8 border border-black dark:text-black">
              <div className="flex flex-row space-x-3 align-center">
                  <img
                      className="w-28 h-28 object-cover rounded-full"
                      src={image}
                  ></img>
                  <div className="flex flex-col">
                      <p className="text-4xl font-bold">{teacherName}</p>
                      <p className="text-xl flex">{location}</p>
                  </div>
              </div>
              <p>{bio}</p>
              <a
                  href={link}
                  className="space-x-1 py-2 text-lg bg-white rounded w-fitcontent mx-auto p-3 m-2 align-center justify-center text-maroonx-11 dark:bg-black dark:text-white"
              >
                  Link
              </a>
          </div>
      </>
  );
}
