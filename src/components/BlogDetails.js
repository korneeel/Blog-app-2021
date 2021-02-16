import React from 'react';
import  { useHistory, useParams } from 'react-router-dom';
import useFetch from './UseFetch'

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    let history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(()=>{
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}...</div> }
            { blog && (
                <article>
                    <h2>{ blog.title} ID: {id}</h2>
                    <p>Written bye: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete POST</button>
                </article>
            )}
        </div>
    )
}
export default BlogDetails