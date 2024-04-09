import GenderCheckBox from "./GenderCheckBox"

const SignUp = () => {
  return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-30">
      <h1 className="text-3xl font-semibold text-center text-gray-300">SignUp
      <span className="text-teal-400"> Aur Sunao</span>
      </h1>
      <form>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Full Name:</span>
          </label>
          <input type="text" placeholder="Enter your full name"
          className="w-full input input-bordered h-10"/>
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Email:</span>
          </label>
          <input type="text" placeholder="Enter your email "
          className="w-full input input-bordered h-10"/>
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Enter Username:</span>
          </label>
          <input type="text" placeholder="What do you want others to call you"
          className="w-full input input-bordered h-10"/>
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Password:</span>
          </label>
          <input type="password" placeholder="Enter password"
          className="w-full input input-bordered h-10"/>
        </div>
        
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Confirm Password:</span>
          </label>
          <input type="password" placeholder="Confirm your password"
          className="w-full input input-bordered h-10"/>
        </div>

        < GenderCheckBox/>

        <a href="" className="text-sm hover:underline hover:text-blue-600
             mt-2 inline-block"> Already have an account?
        </a>

        <div>
          <button className="btn btn-block btn-sm mt-2">SignUp</button>
        </div>     
        
      </form>
    </div>

  </div>
  
}

export default SignUp