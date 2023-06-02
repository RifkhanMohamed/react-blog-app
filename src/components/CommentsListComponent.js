const CommentsListComponent = ({comments}) => {
    <>
        <h1>Comments:</h1>
        {comments.map(comment=>(
        <div className="comment" key={comment.postedBy+ ': ' +comment.text}>
            <h3>{comment.postedBy}</h3>
            <p>{comment.text}</p>
        </div>
        ))}
    </>
};

export default CommentsListComponent;