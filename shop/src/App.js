import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: "Стул серый",
                    img: 'chair1.jpg',
                    desc: 'lorem',
                    category: 'chairs',
                    price: 49.99
                },
                {
                    id: 2,
                    title: "Стол",
                    img: 'images.png',
                    desc: 'lorem',
                    category: 'able',
                    price: 49.99
                },
                {
                    id: 3,
                    title: 'Cтол',
                    img: 'table2.jpg',
                    desc: 'lorem',
                    category: 'able',
                    price: 49.99
                },
                {
                    id: 4,
                    title: 'Табурет',
                    img: 'chair2.jpg',
                    desc: 'lorem',
                    category: 'chairs',
                    price: 49.99
                },
                {
                    id: 5,
                    title: 'Полка',
                    img: 'table-little.jpg',
                    desc: 'lorem',
                    category: 'shelf',
                    price: 49.99
                },
                {
                    id: 6,
                    title: 'Столешница',
                    img: 'table-little2.jpg',
                    desc: 'lorem',
                    category: 'countertop',
                    price: 49.99
                }
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }
    render ()
    {
     return (
    <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
    </div>
  )
    }

    chooseCategory (category) {
this.setState({currentItems: this.state.currentItems.filter(el => el.category === category)
})
    }
    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
            isInArray = true
        })
        if (!isInArray)
        this.setState({orders: [...this.state.orders, item]})
    }
}
export default App;

