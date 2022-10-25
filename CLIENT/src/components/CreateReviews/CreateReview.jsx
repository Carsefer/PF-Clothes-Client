import Rating from '@mui/material/Rating';
import {useEffect, useState} from "react"
import Styles from "./CreateReview.module.css"
import { createReviewProduct } from '../../redux/actions';

const CreateReview = ({id}) => {
    const [rating, setRating] = useState({value: null, text: ""})
    const [info, setInfo] = useState("");

    useEffect(() => {
        (async () => {
        if (!info) {
            const data = await getSession();
            setInfo(data);
        }})();
    }, [info]);

    const handdleChange = (e) => {
        setRating({...rating, text: e.target.value});
    }

    const postReview = () => {
        createReviewProduct(id, rating.text, rating.value, info.token);
    }

    return (
        <div>
            <h2>Realizar Reseña</h2>
            <div>
                <Rating value={rating.value} onChange={(event, newvalue) => {setRating({...rating, value: newvalue});}} sx={{fontSize: '5rem',}}/>
            </div>
            <div className={Styles.ReviewFormsContainer}>
                <form className={Styles.ReviewForms} onSubmit={(e) => {
                    e.preventDefault();
                    postReview();
                }}>
                    <textarea className={Styles.ReviewText} name="" id="" cols="30" rows="10" onChange={(evento) => handdleChange(evento)} placeholder={"Introduzca Reseña..."}></textarea>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </div>
    );
};

export default CreateReview;