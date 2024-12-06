import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { motion } from "framer-motion"
import { EllipsisIcon, FilterIcon } from "lucide-react"

export const Route = createFileRoute("/_app/profile")({
  component: RouteComponent,
})

function RouteComponent() {
  const [userData, setUserData] = useState({
    username: "JohnD",
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://picsum.photos/100/100?random=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
      },
    ],
  })
  return (
    <div className="h-screen pt-[74px]">
      <div className="p-[30px]">
        <motion.div
          animate={{
            background: "linear-gradient(to right, #fb923c, #eab308)",
          }}
          className="rounded-b-[14px] relative w-full h-[160px] rounded-t-[40px]"
        >
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden p-[6px] bg-white absolute -bottom-[50px] left-[50%] -translate-x-[50%]">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
        <div className="flex relative p-[20px]  pt-[140px] gap-[20px]">
          <div className="flex w-full   gap-2 ">
            <div className="flex flex-col justify-between  w-full relative gap-4 bg-gradient-to-tr text-rose-500 from-rose-400/20 px-7 to-rose-600/20 rounded-xl p-5">
              <div>
                <h3 className="text-[18px] font-semibold">About me</h3>
                <p className="text-[14px] opacity-80 w-[300px]">
                  {userData.description}
                </p>
              </div>

              <h2 className="text-[12px] w-full font-semibold text-end text-gray-600 ">
                Joined: December 2024
              </h2>
            </div>
            <div className=" absolute left-[50%] -translate-x-[50%] top-0 text-center pt-[60px]">
              <h1 className="text-[24px] font-bold">{userData.name}</h1>
              <p className="text-[14px] text-gray-500 w-[240px]">
                @{userData.username}
              </p>
            </div>
            <div className="flex flex-col min-w-fit h-full gap-2">
              <div className="bg-gradient-to-tr flex items-center justify-center h-full text-white from-indigo-400/20 px-7 to-indigo-600/20 rounded-xl p-3">
                <h2 className="text-[28px] font-semibold gap-1 text-indigo-400 leading-tight flex items-end">
                  140{" "}
                  <span className="text-[14px] mb-[6px] font-normal">
                    Products Sold
                  </span>
                </h2>
              </div>
              <div className="bg-gradient-to-tr flex items-center justify-center h-full text-white from-teal-400/20 px-7 to-teal-600/20 rounded-xl p-3">
                <h2 className="text-[28px] font-semibold gap-1 text-teal-500 leading-tight flex items-end">
                  94%{" "}
                  <span className="text-[14px] mb-[6px] font-normal">
                    Success Rate
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] font-semibold">Products</h2>
              <div className="flex items-center gap-2">
                <div className="text-[14px] flex gap-2 items-center font-semibold px-3 cursor-pointer bg-rose-300/30 text-rose-500 active:scale-95 hover:shadow-lg transition-all rounded-md p-[6px]">
                  Filter <FilterIcon size={20} />
                </div>
                <div className="text-[14px] bg-rose-300/30 text-rose-500 active:scale-95 cursor-pointer hover:shadow-lg transition-all rounded-md p-[6px]">
                  <EllipsisIcon size={20} />
                </div>
              </div>
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-2">
              {userData.products.map((product) => (
                <div className="bg-white hover:scale-[1.02] duration-300 transition-all hover:shadow-lg overflow-hidden rounded-xl">
                  <div className="w-full h-[100px] bg-gradient-to-tr relative from-indigo-400/20 to-indigo-600/40">
                    <div className="absolute top-0 right-[20px] rounded-b-lg bg-black font-semibold text-white px-2 py-[2px] pt-3">
                      ${product.price}
                    </div>
                  </div>
                  <div className="p-[10px]">
                    <h3 className="text-[18px] font-semibold">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
