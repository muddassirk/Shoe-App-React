import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Product from '../components/Product'
import ProductItems from '../components/ProductItems'
import NavBar from '../components/NavBar'

export default function Rout() {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route exact path='/product' component={Product} />
                    <Route path='/product/:id' component={ProductItems} />
                    <Route path='*' component={()=><h1>404 Not Found</h1>} />
                </Switch>
            </Router>
            
        </div>
    )
}
