import Star from "../images/icono-estrella.png"
import Rating from '@mui/material/Rating';

const Comments = ({score, reviews}) => {
    return (
        <div>
            <div>
                {[...Array(score || 5)].map((star) => {
                    return <img src={Star}/>
                })}
            </div>
            <div>
                <p>{reviews}</p>
            </div>
            <Rating value={score}/>
        </div>
    );
};

export default Comments;