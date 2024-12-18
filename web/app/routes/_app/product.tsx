import { createFileRoute } from "@tanstack/react-router"
import { ThumbsUpIcon } from "lucide-react"

export const Route = createFileRoute("/_app/product")({
  component: RouteComponent,
})

function RouteComponent() {
  const seller = {
    name: "John Doe",
    username: "johndoe",
    profileImage: "https://via.placeholder.com/150",
    location: "New York, NY",
    rating: 4.5,
    numSold: 100,
  }
  const product = {
    name: "Product Name",
    price: 100,
    description: "Product Description",
    deliverySpeed: "10min",
  }
  return (
    <div className="pt-[74px] h-screen">
      <div className="max-w-[1200px] h-full mx-auto p-4 flex gap-4">
        <div className="flex gap-2 flex-col h-full bg-white shadow-lg rounded-2xl w-full ">
          <h1 className="text-[32px] p-[20px] border-b-2 border-slate-400/20 w-full font-semibold">
            {product.name}
          </h1>
          <div className="p-[20px]">{product.description}</div>
        </div>
        <div className="flex gap-2 flex-col w-[40%]">
          <div className="h-fit w-full bg-white shadow-lg  overflow-hidden rounded-2xl">
            <div className="h-[100px] bg-gradient-to-br  from-orange-500 to-orange-300 relative">
              <div className="absolute top-1 left-1 flex gap-1 items-center">
                <div className="flex gap-1 items-center font-semibold text-green-500 bg-white text-[12px] rounded-full px-4 p-1">
                  <ThumbsUpIcon size={15} /> 94.05%
                </div>
                <div className="flex gap-1 items-center text-neutral-500 font-semibold bg-white/50 text-[12px] rounded-full px-4 p-1">
                  750 sold
                </div>
              </div>
              <div className="absolute bottom-[-40px] h-[80px] left-[50%] translate-x-[-50%] w-[80px] rounded-full bg-white p-1">
                <img
                  src={seller.profileImage}
                  alt={seller.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="p-4  pt-[40px] ">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-[20px] font-semibold">{seller.name}</h2>
                <p className="text-[14px] text-gray-500">@{seller.username}</p>
              </div>
            </div>
          </div>
          <div className="h-fit w-full bg-white shadow-lg  overflow-hidden rounded-2xl">
            <h2 className="text-[20px] flex justify-between items-center font-semibold p-4">
              <div>Total Amount: </div>
              <div className="flex items-end gap-1">
                {product.price}{" "}
                <span className="text-[14px] font-normal mb-1">USD</span>
              </div>
            </h2>
            <button className="w-full bg-black text-white p-4 rounded-b-xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
