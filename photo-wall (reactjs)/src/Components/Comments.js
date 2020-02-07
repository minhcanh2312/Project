import React, {Component} from 'react'

class Comments extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        let comment = event.target.elements.comment.value
        if(comment) {
            this.props.addComment(comment, this.props.post_id)
            event.target.elements.comment.value = ''
        }
    }

    render() {
        let {comments} = this.props

        return (
            <div className="commnent" style={{fontSize: "17px", margin: "20px"}} >
                {comments[this.props.post_id] ? comments[this.props.post_id].map((comment, i) => <p key={i}>{comment}</p>) : null}
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" name="comment"/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Comments