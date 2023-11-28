// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   console.log(formData);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);

//       const res = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       if (data.success === false) {
//         setLoading(false);
//         setError(data.message);
//         return;
//       }
//       setLoading(false);
//       setError(null);
//       navigate("/signin");
//     } catch (error) {
//       setLoading(false);
//       setError(error.message);
//     }
//   };

//   return (
//     <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
//       <div className="md:w-1/3 max-w-sm">
//         <img
//           src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//           alt="Sample image"
//         />
//       </div>

//       <form className="md:w-1/3 max-w-sm" onSubmit={handleSubmit}>
//         <input
//           className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
//           type="text"
//           placeholder="Email Address"
//           id="email"
//           onChange={handleChange}
//         />
//         <input
//           className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
//           type="text"
//           placeholder="Username"
//           id="username"
//           onChange={handleChange}
//         />
//         <input
//           className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
//           type="password"
//           placeholder="Password"
//           id="password"
//           onChange={handleChange}
//         />
//         <div className="mt-4 flex justify-between font-semibold text-sm">
//           <a
//             className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
//             href="#"
//           >
//             Forgot Password?
//           </a>
//         </div>
//         <div className="text-center md:text-left">
//           <button
//             className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
//             type="submit"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Sign Up"}
//           </button>
//         </div>
//         <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
//           have an account?{" "}
//           <Link
//             className="text-red-600 hover:underline hover:underline-offset-4"
//             to={"/signin"}
//           >
//             Sign In
//           </Link>
//         </div>
//           {error && <p className="text-red-500 mt-5">{error}</p>}
//       </form>
//     </section>
//   );
// };

// export default Signup;



















import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>

      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/signin'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}