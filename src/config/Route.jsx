import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

export default function Route() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' component={} />
                    <Route />
                    <Route />
                </Switch>
            </Router>
            
        </div>
    )
}
