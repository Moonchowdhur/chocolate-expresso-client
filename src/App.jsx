import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
// import Swal from "sweetalert";
import Swal from "sweetalert2";

const App = () => {
  const loadedChoco = useLoaderData();
  const [choco, setChoco] = useState(loadedChoco);
  console.log(loadedChoco);

  const deleteChocolate = (id) => {
    console.log(id);
    Swal.fire({
      title: "Do you want delete this Chocolate?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire("Okay chcolate deleted!", "", "success");
        fetch(`https://chocolate-server-three.vercel.app/chocolates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Okay chcolate deleted!", "", "success");
              const remainingChoco = choco.filter((ch) => ch._id !== id);
              setChoco(remainingChoco);
            }
          });
      }
    });
  };

  return (
    <div className="md:px-12 p-4 min-h-screen bg-[#815B5B]">
      <h2 className="text-center text-5xl font-serif tracking-widest bg-[#815B5B] p-4 text-white ">
        Chocolate Management System
      </h2>
      <Link to="/add">
        <button className="font-serif bg-white btn text-[#815B5B] md:mx-20">
          Add Chocolate
        </button>
      </Link>

      {/* table */}
      <div className="overflow-x-auto md:mx-20  mt-8 ">
        <table className=" table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="py-2 px-4 bg-black font-bold text-white text-xl font-serif ">
                Pic
              </th>
              <th className="py-2 px-4 bg-black font-bold text-white text-xl font-serif ">
                Name
              </th>
              <th className="py-2 px-4 bg-black font-bold text-white text-xl font-serif ">
                Country
              </th>
              <th className="py-2 px-4 bg-black font-bold text-white text-xl font-serif ">
                Category
              </th>
              <th className="py-2 px-4 bg-black font-bold text-white text-xl font-serif ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr> */}
            {choco.map((chocolate, index) => (
              <tr key={chocolate._id} className="hover ">
                <td className="w-20 h-20">
                  <img src={chocolate.pic} alt="" />
                </td>
                <td>{chocolate.name}</td>
                <td>{chocolate.country}</td>
                <td>{chocolate.option}</td>
                <td className="flex p-10 items-center gap-3 text-2xl text-[#815B5B]">
                  <Link to={`/update/${chocolate._id}`}>
                    <BsFillPencilFill />
                  </Link>
                  <button onClick={() => deleteChocolate(chocolate._id)}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* table end */}
    </div>
  );
};

export default App;
