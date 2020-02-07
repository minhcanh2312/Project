import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photo(props) {
    const {post, comments} = props
    let count_comments = comments[post.id] ? comments[post.id].length : 0

    return (
        <figure className="figure">
            <Link to={`/single/${post.id}`} style={{display: "block"}}>
                <img className="photo img-fluid" src={post.image_link} alt={post.description} style={{width: "100%"}} />
            </Link>
            <figcaption style={{fontSize: "16px"}} ><p>{post.description}</p></figcaption>
            <div className="button-container">
                {/* {props.location.pathname === '/' ? <button className="remove-button" onClick={()=>props.removePost(post)}>Remove</button> : null } */}
                <button className="remove-button" 
                    onClick={()=> {
                        props.removePost(post)
                        props.history.push('/')
                    }}>
                    Remove
                </button>
                <Link to={`/single/${post.id}`}><button>({count_comments}) comments</button></Link>
            </div>
        </figure>
    )
}
Photo.propTypes = {
    post: PropTypes.object.isRequired,
    // onRemovePhoto: PropTypes.func.isRequired
}

export default Photo