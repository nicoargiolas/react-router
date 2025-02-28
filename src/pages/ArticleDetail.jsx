import axios from "axios";
import { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

export default function ArticleDetail() {

    const { id } = useParams();
    const [article, setArticle] = useState({});

    function fetchArticle() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then((res) => setArticle(res.data))
    }

    // richiamo la funzione di richiesta dati al caricamento del componente
    // Solo al primo rendering
    useEffect(() => fetchArticle(), [id])

    return (
        <>
            <h2>Questa è la pagina del post {article.title}</h2>
            <img src={article.image} alt={article.name} />
            <p className='content'>{article.content}</p>
        </>
    );
}