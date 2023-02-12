// Componentes
import Card from "../components/Card";

function Cards({ food, addToBuy }) {
  return (
    // Contenedor de las cards
    <div className="p-8 grid grid-cols-1 gap-16 mt-10">
      {/* Mapeo de las cards */}
      {food.map(({ image, name, price, stock, addToBuy, description, id }) => {
        return (
          // Pasamos los props a la card
          <Card
            key={id}
            image={image}
            name={name}
            price={price}
            stock={stock}
            addToBuy={() => addToBuy(id)}
            id={id}
            description={description}
          />
        );
      })}
    </div>
  );
}

export default Cards;
