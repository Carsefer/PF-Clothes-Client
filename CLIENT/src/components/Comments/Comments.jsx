import Star from "../images/icono-estrella.png"
import Rating from '@mui/material/Rating';

const Comments = ({score, reviews}) => {
    return (
        <div>
            <div>
                <Rating value={score} readOnly sx={{fontSize: '5rem',}}/>
            </div>
            <div>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

export default Comments;