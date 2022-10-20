import Star from "../images/icono-estrella.png"
import Rating from '@mui/material/Rating';

const Comments = ({score, reviews}) => {
    return (
        <div>
            <div>
                <Rating value={score} readOnly/>
            </div>
            <div>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

export default Comments;