import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import  articles from "./article-content";
import NotFound from "./NotFound";
import axios from 'axios';
import CommentsListComponent from "../components/CommentsListComponent";

const Article = () => {
    const {articleId} = useParams();
    const article = articles.find(article=>article.name===articleId);
    const [articleInfo, setArticleInfo] = useState({upvote:0,comments:[]});

    useEffect(()=>{
        const loadArticleInfo = async () => {
            const res = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = res.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    },[]);

    const addUpVote = async () => {
        const res = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = res.data;
        setArticleInfo(updatedArticle);
    }

    if(!article)
    return(
        <NotFound/>
    )

    return (
        <>
        <h1>{article.title}</h1>
        <div className="upvotes-section">
            <button onClick={addUpVote}>Upvote</button>
        </div>
        <p>This artcile has {articleInfo.upvote} upvote(s)</p>
        {article.content.map(
            (paragraph,i)=>(<p key={i}>{paragraph}</p>
            ))}
        <CommentsListComponent comments={articleInfo.comments}/>
        </>

    )
}

export default Article;