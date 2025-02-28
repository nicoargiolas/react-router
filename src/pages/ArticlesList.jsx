import { useEffect, useState } from "react";
import axios from "axios";

export default function ArticlesList() {
    const [articles, setArticles] = useState([]);

    function fetchArticles() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => setArticles(res.data))
    }
    useEffect(fetchArticles, []);

    return (
        <>
            {articles.length === 0 ?
                <h2>Non ci sono post da visualizzare</h2>
                :
                <div className='articles-list'>
                    {articles.map((item) => (
                        <div className='post' key={item.id}>
                            <h2>{item.title}</h2>
                            <img src={item.image} alt={item.title} />
                            <p className='content'>{item.content}</p>
                            <p className='tags'>{item.tags.join(", ")}</p>
                            <button onClick={() => deletePost(item.id)}>
                                Elimina
                            </button>
                        </div>
                    ))
                    }
                </div >
            }
        </>
    )
}