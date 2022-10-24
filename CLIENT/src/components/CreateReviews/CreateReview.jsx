import Rating from '@mui/material/Rating';
import {useState} from "react"

const CreateReview = ({id}) => {
    const [rating, setRating] = useState({value: null, text: "Introduzca review"})

    const handdleChange = (e) => {
        setRating({...rating, text: e.target.value});
    }

    const postReview = () => {

    }

    return (
        <div>
            <h2>Realizar Reseña</h2>
            <div>
                <Rating value={rating.value} onChange={(event, newvalue) => {setRating({...rating, value: newvalue});}} sx={{fontSize: '5rem',}}/>
            </div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    postReview();
                }}>
                    <input className='ReviewText' type="text" onChange={(evento) => handdleChange(evento)} placeholder={rating.text}/>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </div>
    );
};

export default CreateReview;