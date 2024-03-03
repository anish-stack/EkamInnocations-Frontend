import React from "react";
import { Link } from "react-router-dom";

const BooksE = () => {
  const data = [
    {
      id: 1,
      itemname: "Leadership-Book",
      price: "Free",
      img: "https://i.ibb.co/TgV2g62/1.png",
      Links:"https://drive.google.com/file/d/1HnOcjU0shVP2gxHDPToIVKYeXg30nU_6/view?usp=sharing"
    },
    {
      id: 2,
      itemname: "Principles Of Life",
      price: "Free",
      img: "https://i.ibb.co/FXTN3Jx/2.png",
      Links:"https://drive.google.com/drive/folders/1eDAdie9DB46UXP6RwapqY8EUJ0bTIe8T?usp=sharing"
    },
    {
      id: 3,
      itemname: "Psychology of life",
      price: "Free",
      img: "https://i.ibb.co/ck4XFpn/3.png",
      Links:"https://drive.google.com/drive/folders/1vaUYU03MI1aB7fQuuzMFdod-kgIFBmPj?usp=sharing"
    },
    {
      id: 4,
      itemname: "Self Awareness",
      price: "Free",
      img: "https://i.ibb.co/Bc8F9fC/4.png",
      Links:"https://drive.google.com/drive/folders/1w9ll83nyGVdH8-VDqEEuhqsqjlH8enXE?usp=sharing"
    },
    {
      id: 5,
      itemname: "Spiriulaity And Self",
      price: "Free",
      img: "https://i.ibb.co/jvrb61j/5.png",
      Links:"https://drive.google.com/drive/folders/19jfKmYrhPgMtmYteL5I8fHSjHxxuWUBZ?usp=sharing"

    },
    {
      id: 6,
      itemname: "Success Formulas",
      price: "Free",
      img: "https://i.ibb.co/6m71X83/6.png",
      Links:"https://drive.google.com/drive/folders/1GjF4xmnEPJCX1q5KiHWv8RGnndcJDAIf?usp=sharing"
    }
  ];
  return (
    <div className="p-5 min-h-screen w-full relative">
      <div className="Headings flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold">Read Learn Grow</h2>
        <hr className="bg-orange-500 text-center w-[240px] h-1" />
      </div>
      <div className="books-grid">
        <div className="books-Ebooks">
          {data &&
            data.map((item, index) => (
              <div className="" key={index}>
                <div className="max-w-sm mx-auto h-[550px] bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-[400px]">
                <img
                    className="w-full h-full object-fill"
                    src={item.img}
                    alt={item.itemname}
                  />
                </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.itemname}
                    </h2>
                    <p className="text-gray-600 mt-2">Price: {item.price}</p>
                    <div className="mt-4">
                      <Link target="_blank" to={`/Single-Books-E/${item.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-full">
                        Read Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BooksE;
