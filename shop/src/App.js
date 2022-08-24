import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
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
    }
    render ()
    {
     return (
    <div className='wrapper'>
        <Header />
        <Items items={this.state.items}/>
        <Footer />
    </div>
  )
    }
}
export default App;

