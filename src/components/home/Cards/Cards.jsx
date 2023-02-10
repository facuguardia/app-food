import Card from "../Card/Card"

export default function Cards({food, addToBuy}){

    return(
        <div className="p-8 grid grid-cols-1 gap-16 mt-10" >
            {
                food.map(({image, name, price, stock, addToBuy, description, id }) => {
                    return(
                        <Card
                        key = {id}
                        image = {image}
                        name = {name}
                        price = {price}
                        stock = {stock}
                        addToBuy = {() => addToBuy(id)}
                        id = {id}
                        description = {description}
                        />
                    )
                })
            }
        </div>
    )
}