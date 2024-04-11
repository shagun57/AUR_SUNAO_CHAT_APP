import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    
  }
  return (
  <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-30">
      <h1 className="text-3xl font-semibold text-center text-gray-300">SignUp
      <span className="text-teal-400"> Aur Sunao</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Full Name:</span>
          </label>
          <input type="text" placeholder="Enter your full name"
          className="w-full input input-bordered h-10"
          value={inputs.fullName}
          onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
          />
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Email:</span>
          </label>
          <input type="text" placeholder="Enter your email "
          className="w-full input input-bordered h-10"
          value={inputs.email}
          onChange={(e) => setInputs({...inputs, email: e.target.value})}
          />
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Enter Username:</span>
          </label>
          <input type="text" placeholder="What do you want others to call you"
          className="w-full input input-bordered h-10"
          value={inputs.username}
          onChange={(e) => setInputs({...inputs, username: e.target.value})}
          />
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Password:</span>
          </label>
          <input type="password" placeholder="Enter password"
          className="w-full input input-bordered h-10"
          value={inputs.password}
          onChange={(e) => setInputs({...inputs, password: e.target.value})}
          />
        </div>
        
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Confirm Password:</span>
          </label>
          <input type="password" placeholder="Confirm your password"
          className="w-full input input-bordered h-10"
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} 
          />
        </div>

        < GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender= {inputs.gender}/>

        <Link to="/login" className="text-sm hover:underline hover:text-blue-600
             mt-2 inline-block"> Already have an account?
        </Link>

        <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
        </div>     
        
      </form>
    </div>

  </div>
  )
}

export default SignUp