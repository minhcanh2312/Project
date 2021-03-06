import React, { Component } from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto'
import { Route } from "react-router-dom"
import Single from './Single'

class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <Route path="/" exact render={(params) => (
                    <div>
                        <PhotoWall {...this.props} {...params} />
                    </div>
                    )} />
                <Route path="/AddPhoto"
                    // render={history => <AddPhoto {...this.props} history={history} />}
                    render={() => <AddPhoto {...this.props} />}
                />
                <Route path="/single/:id" render={(params)=><Single {...this.props} {...params} />} />
            </div>
        )
    }
}

export default Main