import React, { Component } from 'react'

class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        let {posts} = this.props
        let image_link = e.target.elements.link.value
        let description = e.target.elements.description.value
        let newPost = {
            id: posts.length,
            description,
            image_link
        }
        if(image_link && description) {
            this.props.addPost(newPost)
            this.props.history.push('/')
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto