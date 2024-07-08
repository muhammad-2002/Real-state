import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Sell = () => {
  return (
    <div className="bg-[#122B49] text-white h-[calc(100vh-68px)] ">
      <div className=" w-[60%] space-y-3  pl-[100px] text-start  pt-16  ">
        <h1 className="text-4xl font-bold">
          Sell or Rent your Property For Free
        </h1>
        <p className="text-[14px] ">
          Whether you’re ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your needs.
        </p>
      </div>
      <div className="flex gap-2 w-[75%] mx-auto ">
        <div className="space-y-3 mt-7">
          <h1 className="text-2xl font-bold">
            Upload your property in 4 simple steps
          </h1>
          <div className="flex justify-start items-center">
            <img src="/src/assets/image 29.png"></img>
            <h2>
              Add your properties{" "}
              <span className="font-bold">Basic Details</span>
            </h2>
          </div>
          <div className="flex justify-start items-center">
            <img src="/src/assets/image 29.png"></img>
            <h2>
              Add property <span className="font-bold">Location</span>
            </h2>
          </div>
          <div className="flex justify-start items-center">
            <img src="/src/assets/image 29.png"></img>
            <h2>
              Add property{" "}
              <span className="font-bold">Features and amenities</span>
            </h2>
          </div>
          <div className="flex justify-start items-center">
            <img src="/src/assets/image 29.png"></img>
            <h2>
              Add <span className="font-bold">Price details</span>
            </h2>
          </div>
          <div className="flex justify-start items-center">
            <img src="/src/assets/image 29.png"></img>
            <h2>
              Add your best <span className="font-bold">Property Shots</span>
            </h2>
          </div>
        </div>
        <div className="w-[608px] h-[366px] rounded-lg bg-white relative">
          <h1 className="cream rounded-t-lg py-4 text-black px-16 text-2xl font-normal">
            LETS GET YOU STARTED !
          </h1>
          <form className="text-black w-[60%] form-container   mt-5 mx-auto  ">
            <div className="space-y-3 overflow-y-scroll h-[220px]">
              <label>
                <span className="text-red-500">*</span>I am :{" "}
              </label>
              <div className="flex justify-between gap-3 items-center">
                <label className="flex gap-3">
                  <input className="" type="radio" name="I am " value="owner" />{" "}
                  Owner
                </label>
                <label className="flex gap-3">
                  <input type="radio" name="I am" value="builder" /> Builder
                </label>
              </div>
              <div>
                <label>
                  Your Name: <span className="text-red-600">*</span>
                </label>
                <br></br>
                <input
                  className="mt-2 border-gray-600 border-[2px] border-solid px-2 py-[4px] w-full"
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                ></input>
              </div>
              <div>
                <label>
                  Country<span className="text-red-600">*</span>
                </label>{" "}
                <br></br>
                <select
                  className="mt-2 border-gray-600 border-[2px] border-solid px-2 py-[4px] w-full"
                  name="country"
                >
                  <option value="">Select Country</option>
                  <option selected value="India">
                    India
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              <div>
                <label>
                  Phone<span className="text-red-600">*</span>
                </label>{" "}
                <br></br>
                <PhoneInput className="w-full" country={"us"} />
              </div>
            </div>
          </form>
          <div className="cream z-20 flex justify-between w-full rounded-b-lg px-10 absolute bottom-0  py-4 left-0  ">
            <h1 className="  text-black font-bold text-[14px]  ">
              <span className="text-gray-400 ">Need Help?</span> Call 9999999999
            </h1>

            <button className="bg-[#122B49] px-4 py-[2px] font-normal rounded-md cursor-pointer">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
