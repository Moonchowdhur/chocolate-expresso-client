import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Add = () => {
  const addChocolate = (event) => {
    event.preventDefault();
    const pic = event.target.pic.value;
    const name = event.target.name.value;
    const country = event.target.country.value;
    const option = event.target.option.value;
    const newChocolate = { name, country, option, pic };
    console.log(newChocolate);
    fetch("https://chocolate-server-three.vercel.app/chocolates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("wow!!!", "New Chocolate Added❤️❤️", "success");
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
          Use the below form to create a new product
        </p>
        <form onSubmit={addChocolate}>
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
                placeholder="Enter Country Name"
                className="input input-bordered rounded-lg w-full "
              />
            </label>
          </div>
          <select name="option" className="select mt-7  w-full ">
            <option disabled>Categorty</option>
            <option>Premium</option>
            <option>Free</option>
          </select>
          <input
            type="submit"
            value="Add a Chocolate"
            className=" font-['cursive'] mt-7 bg-[#815B5B] btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Add;
