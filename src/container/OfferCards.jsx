// Componentes
import OfferCard from "../components/OfferCard";

function OfferCards({ food}) {
  return (
    // Contenedor de las cards
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-16 mt-10">
      {/* Mapeo de las cards */}
      {food.map(({ image, name, price, stock, addToBuy, description, id, discount,isOffer }) => {
        return (
          // Pasamos los props a la card
          <OfferCard
            key={id}
            image={image}
            name={name}
            price={price}
            stock={stock}
            id={id}
            description={description}
            discount={discount}
            isOffer={isOffer}
          />
        );
      })}
    </div>
  );
}

export default OfferCards;