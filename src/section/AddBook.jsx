import React from 'react';
import { BiPlus } from 'react-icons/bi';
import backendAPI from '../services/apiRequest';
import { toast } from 'react-toastify';

const Label = ({ title }) => {
  return <label className="block tracking-wider bg-slate-50 rounded-t-md w-fit p-1 px-5 border border-gray-300 border-b-0 translate-y-[8px] capitalize text-sm font-medium text-gray-900 dark:text-white" htmlFor={title}>
    {title}
  </label>
}

const InputField = ({ type, name, placeholder }) => {
  return <input
    type={type}
    id={name}
    name={name}
    className="bg-gray-50 shadow-md outline-none border border-gray-300 text-gray-900 text-sm rounded-lg rounded-tl-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder={placeholder}
    required
  />
}

const AddBook = ({onClose}) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      title: formData.get("title"),
      author: formData.get("author"),
      language: formData.get("language"),
      pages: parseInt(formData.get("pages"), 10),
      country: formData.get("country"),
      year: parseInt(formData.get("year"), 10),
      link: formData.get("link"),
      file: formData.get("file")
    };
    
    backendAPI.post('/books', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }})
      .then(response => {
        toast("Book Added Successfully");
        onClose();
        console.log("Book added successfully:", response.data);
      })
      .catch(error => {
        const errorMsg = error.response.data.message;
        if (errorMsg) {
          toast(errorMsg);
        } else {
          console.error('Unexpected error occurred:', error);
          toast('Unexpected error occurred:');
        }
      });
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto flex flex-col items-end">
        <div className="relative mb-2 w-full ">
          <Label title="title" />
          <InputField type={"text"} name={"title"} placeholder={"Book's Title"} />
        </div>
        <div className="mb-2 w-full ">
          <Label title="author" />
          <InputField type={"text"} name={"author"} placeholder={"Author Name"} />
        </div>
        <div className='mb-2 flex justify-between gap-2 w-full'>
          <div>
            <Label title={"language"} />
            <InputField type={"text"} name={"language"} placeholder={"Language"} />
          </div>
          <div>
            <Label title={"pages"} />
            <InputField type={"number"} name={"pages"} placeholder={"Number of Pages"} />
          </div>
        </div>

        <div className='mb-2 flex justify-between gap-2 w-full'>
          <div>
            <Label title={"country"} />
            <InputField type={"text"} name={"country"} placeholder={"Enter Country"} />
          </div>
          <div>
            <Label title={"year"} />
            <InputField type={"number"} name={"year"} placeholder={"Published Year"} />
          </div>
        </div>
        <div className="mb-2 w-full ">
          <Label title="Link" />
          <InputField type={"text"} name={"link"} placeholder={"Live Link (Wikipedia, Scholarpedia, ...)"} />
        </div>
        <div className="mb-5 w-full ">       
          <Label title="thumbnail"/>
          <input className="block shadow-md w-full text-sm text-gray-900 border py-3 p-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            id="thumbnail" 
            name='file'
            type="file"
            multiple
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">
            SVG, PNG, JPG or GIF (ideal size. 499x324px) and 
            <span className=' font-bold text-red-400'> File Size - 100KB.</span></p>
        </div>
        <div className=" bg-red-200 w-full flex items-center p-2 rounded-lg mb-2 ">
          <BsInfo size={25} />
          <div className=" text-xs">
            <span className=" font-bold">Temporary Non Functional</span><br/>
            Note: <i>Vercel platform</i> not supporting JSON -rw operation.
          </div>
        </div>
        <button
          type="submit"
          className="text-white flex items-center gap-2 w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto pl-3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <BiPlus className=" size-5" />
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBook;
