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
                    img: 'chair-grey.jpeg',
                    desc: 'lorem',
                    category: 'chairs',
                    price: 49.99
                },
                {
                    id: 2,
                    title: "Стол",
                    img: 'chair-grey.jpeg',
                    desc: 'lorem',
                    category: 'able',
                    price: 49.99
                },
                {
                    id: 3,
                    title: 'Cтол',
                    img: 'chair-grey.jpeg',
                    desc: 'lorem',
                    category: 'able',
                    price: 49.99
                },
                {
                    id: 4,
                    title: 'Табурет',
                    img: 'chair-grey.jpeg',
                    desc: 'lorem',
                    category: 'chairs',
                    price: 49.99
                },
                {
                    id: 5,
                    title: 'Полка',
                    img: 'chair-grey.jpeg',
                    desc: 'lorem',
                    category: 'shelf',
                    price: 49.99
                },
                {
                    id: 6,
                    title: 'Столешница',
                    img: 'chair-grey.jpeg',
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

