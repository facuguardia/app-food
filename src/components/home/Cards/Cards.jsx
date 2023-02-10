import Card from "../Card/Card"

export default function Cards({food, addToBuy}){

    return(
        <div className="flex mt-14 flex-col items-center justify-center gap-14 mb-14 " >
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