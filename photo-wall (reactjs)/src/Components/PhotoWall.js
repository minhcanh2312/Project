import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props) {
    return (
        <div>
            <Link to="/AddPhoto" className="addIcon" />
            <div className="photoGrid">
                {props.posts.map((post, i) => <Photo key={i} {...props} post={post} />)}
            </div>
        </div>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    // onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall