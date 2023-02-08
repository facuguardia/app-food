export default function Card({name, image, price, stock, description, addToBuy, id}){
    return(
        <div className=" rounded-2xl text-center bg-violet-800 flex flex-col items-center justify-center m-0 w-56 h-56 " >

              <img className=" relative bottom-[50px] w-40  " src={image} alt={name} onClick={addToBuy} />

            <div className=" font-semibold relative bottom-7">
                <h2>{name}</h2>
                <h3 className="text-gray-900/50 text-sm">{price}</h3>
                <h3 className="text-gray-900/50">{description}</h3>
                <h4>{stock}</h4>
            </div>
        </div>
    )
}