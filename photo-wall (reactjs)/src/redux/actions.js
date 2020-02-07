export const REMOVE_POST = 'REMOVE_POST'
export const ADD_POST = "ADD_POST"
export const ADD_COMMENT = "ADD_COMMENT"

export function removePost(post) {
    return {
        type: REMOVE_POST,
        post
    }
}

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function addComment(comment, post_id) {
    return {
        type: ADD_COMMENT,
        comment,
        post_id
    }
}