import React, { useEffect, useState } from "react";
import SinglePackage from "../../shared/SinglePackage/SinglePackage";

import loader from "../../../images/loader.gif";
const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(async () => {
    await fetch(
      "https://zazabor-travelsbackend-production.up.railway.app/packages"
    )
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">
        Premium Tour Plans
      </h2>
      {packages.length === 0 ? (
        <img src={loader} className="w-10/12 mx-auto" />
      ) : (
        <div className="container w-12/12 min-h-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 my-3 mx-auto">
          {packages.map((item) => (
            <SinglePackage key={item._id} item={item}></SinglePackage>
          ))}
        </div>
      )}
    </div>
  );
};

export default Packages;
