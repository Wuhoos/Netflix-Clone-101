import React, {useState} from 'react'

function Form({movies, setMovies}) {

  const [form, setForm] = useState({
    image: "",
    release_date : "",
    overview: "",
    title: ""
  })


  const submitNewMovie = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/Movies', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(newMovie => setMovies([...movies, newMovie]))
    setForm({
      image: "",
      release_date : "",
      overview: "",
      title: ""
    })
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value })
  }


  return (
  <div className="flex content-center justify-center">
    <form className="bg-white w-[35%] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitNewMovie}>
    <h2 className='flex items-center justify-center text-3xl underline text-red-600'>New Movie</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Image
        </label>
        <input type='text' value={form.image} name='image' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Released Date
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='date' value={form.release_date} name='release_date' onChange={handleChange}/>
      </div>
      <div className='mb-6'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Overview
        </label>
        <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' value={form.overview} name='overview' onChange={handleChange}/>
      </div>
      <div className='mb-6'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Title
        </label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' value={form.title} name='title' onChange={handleChange} />
      </div>
      <div className="flex items-center justify-center py-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default Form