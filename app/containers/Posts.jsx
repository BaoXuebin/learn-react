import React, { PropTypes } from 'react';
import uuid from 'uuid';

const propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
};

function Posts({ posts }) {
    return (
        <ul>
            {posts.map(post =>
                <li key={uuid.v4()}>{post.title}</li>)
            }
        </ul>
    );
}

Posts.propTypes = propTypes;
export default Posts;
