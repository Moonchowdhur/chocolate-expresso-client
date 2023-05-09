import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
  const chocolate = useLoaderData();
  console.log(chocolate);
  const updateChocolate = (event) => {
    event.preventDefault();
    const pic = event.target.pic.value;
    const name = event.target.name.value;
    const country = event.target.country.value;
    const option = event.target.option.value;
    const updatedChocolate = { name, country, option, pic };
    // console.log(updatedChocolate);
    fetch(
      `https://chocolate-server-three.vercel.app/chocolates/${chocolate._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedChocolate),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          swal("wow!!!", " Chocolate Updated❤️❤️", "success");
        }
      });
  };

  return (
    <div className="md:px-12 p-4 bg-[#815B5B]">
      <h2 className="text-center text-5xl font-serif tracking-widest bg-[#815B5B] p-4 text-white ">
        Chocolate Management System
      </h2>
      <Link to="/">
        <button className="font-serif bg-white btn text-[#815B5B] md:mx-36">
          All Chocolate
        </button>
      </Link>
      <div className="md:mx-32 mt-12 p-10 bg-[#EAE0DA]">
        <h2 className="font-['cursive'] text-center text-3xl">
          New Chocolates
        </h2>
        <p className="text-center font-mono  mt-3 ">
          Use the below form to update a new product
        </p>
        <form onSubmit={updateChocolate}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-['cursive'] text-xl">
                Photo URL
              </span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="pic"
                defaultValue={chocolate.pic}
                placeholder="Enter Photo URL"
                className="input input-bordered  w-full rounded"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-['cursive'] text-xl">Name</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                defaultValue={chocolate.name}
                name="name"
                placeholder="Enter Chocolate Name"
                className="input input-bordered  w-full rounded"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-['cursive']  text-xl">
                Country
              </span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="country"
                defaultValue={chocolate.country}
                placeholder="Enter Country Name"
                className="input input-bordered rounded-lg w-full "
              />
            </label>
          </div>
          <select
            name="option"
            defaultValue={chocolate.option}
            className="select mt-7  w-full "
          >
            <option disabled selected>
              Categorty
            </option>
            <option>Premium</option>
            <option>Free</option>
          </select>
          <input
            type="submit"
            value="Update a Chocolate"
            className=" font-['cursive'] mt-7 bg-[#815B5B] btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
