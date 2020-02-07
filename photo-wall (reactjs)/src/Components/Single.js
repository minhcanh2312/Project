import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
    render() {        
        const {match, posts, comments} = this.props
        const id = Number(match.params.id)
        const post = posts.find(post => post.id === id)
        
        return (
            <div className="single-photo">
                <Photo {...this.props} post={post} comments={comments} post_id={id} />
                <Comments addComment={this.props.addComment} comments={comments} post_id={id} />
            </div>
        )
    }
}

export default Single