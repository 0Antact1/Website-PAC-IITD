import React from 'react';

const RegistrationPage = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-center bg-[url('assets/img/moon-lander.png')]">
      <h1 className="text-white text-center mt-23">COSMICON</h1>

      <br />
      <div className="container flex justify-between mx-[-20.5px]">
        <div className="custom-form p-10 border-10 border-black rounded-20 shadow-10 w-530 h-680 ml-40 mb-139 mr-20">
          <h3 className="text-black text-center font-Impact text-48 mb-5">Registration</h3>
          <form>
            <div className="mb-3">
              <input type="text" className="form-input" placeholder="Name" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-input" aria-describedby="emailHelp" placeholder="Email address" />
            </div>

            <div className="mb-3">
              <input type="password" className="form-input" placeholder="Password" />
            </div>

            <div className="mb-3">
              <input type="text" className="form-input" placeholder="CollegeName" />
            </div>

            <div className="mb-3">
              <input type="checkbox" className="form-checkbox" id="exampleCheck1" />
              <label className="form-label" htmlFor="exampleCheck1">Agree to Terms and conditions</label>
            </div>
            <button type="submit" className="btn btn-primary ml-100 mt-20 w-220 h-70 bg-bfc4cb text-black text-center font-JustAnotherHand text-30">Register Now</button>
          </form>
        </div>
        <div className="box1 w-774 h-774 bg-center bg-cover bg-[url('assets/img/cosmicon-old-poster.png')]" />
      </div>
    </div>
  );
};

export default RegistrationPage;