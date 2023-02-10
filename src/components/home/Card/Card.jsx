export default function Card({
  name,
  image,
  price,
  stock,
  description,
  addToBuy,
  id,
}) {
  return (
    <div className=" bg-primary flex flex-col items-center gap-2 p-8 rounded-xl text-center text-gray-300 ">
      <img
        className="w-40 object-cover -mt-20 shadow-2xl "
        src={image}
        alt={name}
        onClick={addToBuy}
      />

      <h1 className="text-lg font-medium text-white">{name}</h1>
      <h3 className="text-xl font-semibold text-secondary">{price}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
