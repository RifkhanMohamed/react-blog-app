import articles from "./article-content";
import ArticleListComponent from "../components/ArticleListComponent";

const ArticleList = () => {
    return (
        <>
        <h1>Articles</h1>
        <ArticleListComponent articles={articles}/>
        </>

    );
}

export default ArticleList;