import './post.css'
export default function Post({post}){
    const {id, title, body} = post;
    return (
        <div className='post'>
            <p>Id: {id}</p>
            <p>Title: {title} </p>
            <p>Body: {body} </p>
        </div>
    )
}