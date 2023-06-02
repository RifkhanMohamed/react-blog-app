import { useState } from "react";
import axios from "axios";


const AddCommentForm = ({articleName, onUpdatedArticle}) =>{

    const [name,setName] = useState('');
    const [text,setText] = useState('');

    const addComment = async () => {
        const res = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy : name,
            text :text,
        });
        const updatedArticle = res.data;
        onUpdatedArticle(updatedArticle);
        setName('');
        setText('');
    }

    return(
        <div id="add-comment-form">
            <label>
                Name:
                <input 
                value={name}
                onChange={e=> setName(e.target.value)}
                type="text" />
            </label>
            <label>
                Comment:
                <textarea 
                value={text}
                onChange={e=> setText(e.target.value)}
                rows={4} cols={50}/>
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm;