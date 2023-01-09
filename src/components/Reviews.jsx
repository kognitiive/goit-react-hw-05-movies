import { getReviews } from "MovieAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => { 
    const [reviews, setReviews] = useState([])
    const { id } = useParams();

    useEffect(() => { 
        getReviews(id).then(r => { setReviews(r.data.results) })
    }, [id])
    
    if (reviews.length === 0) {return (<p>We don't have any reviews for this movie.</p>) }
    return (
        <div>
            <ul>
                {reviews.map((rewiew) => { 
                    return <li key={rewiew.id}>
                        <h3>{rewiew.author}</h3>
                        <p>{rewiew.content}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Reviews;