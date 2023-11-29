import React from "react";
import userProfilePicture from "../assets/profile.png";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold font-semibold text-center my-7">
        Profile
      </h1>
      <img
        src={userProfilePicture}
        alt=""
        className="object-contain h-48 w-48 rounded-full outline"
      />
      <form
        action=""
        className="flex flex-col justify-center items-center gap-3 my-5"
      >
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg w-96"
          id="username"
          defaultValue={currentUser.username}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-96"
          id="email"
          defaultValue={currentUser.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-96"
          id="password"
          defaultValue={currentUser.password}
        />

        <button className="bg-slate-700 w-96 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          UPDATE
        </button>
        <div className="flex justify-between items-center gap-48">
          <span className="bg-slate-200 p-2 rounded-lg cursor-pointer text-red-400 font-normal hover:font-medium hover:text-red-500">
            Delete Account
          </span>
          <span className="bg-slate-200 p-2 rounded-lg cursor-pointer text-black font-normal hover:font-medium hover:text-green-500">
            Sign Out
          </span>
        </div>
      </form>
    </div>
  );
};

export default Profile;
