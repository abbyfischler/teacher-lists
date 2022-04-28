import Nav from "../components/nav";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import { ErrorMessage } from '@hookform/error-message';

export default function MakeLists() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = async (d) => {
    fetch(
      `/api/create?teachername=${d.teachername}&location=${d.location}&bio=${d.bio}&wishlist=${d.wishlist}`
    );

  };




  return (
    <>
      <Nav></Nav>
      <section className="w-1/2 mx-auto bg-regal-blue border-2 border-black rounded-xl p-10 mt-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5"
        >
          <label htmlFor="teacherName" className="text-gamboge">Teacher Name (required)</label>
          <input
            className="bg-transparent border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600"
            type="text"
            id="teachername"
            placeholder="Dr. Spell"
            {...register("teacherName", { required: { value: true, message: "You need a teacher name." } })}
          />
          <label htmlFor="location" className="text-gamboge">Location</label>
          <input
            className="bg-transparent border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600"
            type="text"
            id="location"
            placeholder="Los Angeles"
            {...register("location", { required: { value: true, message: "You need a location." } })}
          />
          <label htmlFor="bio" className="text-gamboge">Bio</label>
          <input
            className="bg-transparent border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600"
            type="text"
            id="bio"
            placeholder="I am a classroom from XXXXXX"
            {...register("bio", { required: { value: true, message: "You need a bio." } })}
          />
          <label htmlFor="wishlist" className="text-gamboge">Wishlist link</label>
          <input
            className="bg-transparent border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600"
            type="text"
            id="wishlist"
            placeholder="amazon.com/"
            {...register("wishlist", { required: { 
              value: true, 
              message: "You must enter a valid link" 
              }, pattern: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ })}
          />
          <ErrorMessage
            errors={errors}
            name="wishlist"
            render={({ message }) => <p className="text-red-500 font-medium">{message}</p>}
          />
          <ErrorMessage
            errors={errors}
            name="bio"
            render={({ message }) => <p className="text-red-500 font-medium">{message}</p>}
          />
          <ErrorMessage
            errors={errors}
            name="location"
            render={({ message }) => <p className="text-red-500 font-medium">{message}</p>}
          />
          <ErrorMessage
            errors={errors}
            name="teacherName"
            render={({ message }) => <p className="text-red-500 font-medium">{message}</p>}
          />
          <input
            type="submit"
            className="bg-white text-maroonx-11 hover:bg-maroonx-11 hover:text-white rounded-xl font-bold p-3 w-1/2 mx-auto text-xl"
            value="Submit"
          />
  
          
        </form>
      </section>
    </>
  );
}
