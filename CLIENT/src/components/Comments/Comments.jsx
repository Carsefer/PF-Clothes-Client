import Star from "../images/icono-estrella.png"

const Comments = (score, review) => {
    return (
        <div>
            <div>
                {[...Array(score || 5)].map((star) => {
                    return <img src={Star}/>
                })}
            </div>
            <div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Comments;