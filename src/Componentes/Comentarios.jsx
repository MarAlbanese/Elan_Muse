import { useState } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const Comentarios = () => {
    const [comments, setComments] = useState([]);

    const addComment = (commentText) => {
        const newComment = {
            text: commentText,
            timestamp: new Date().toLocaleString() // Obtener la fecha y hora actual
        };
        setComments([...comments, newComment]);
    };

    return (
        <div className="mt-10 mb-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className='font-medium text-xl text-gray-400'
                style={{ fontFamily: "futurabook,serif", lineHeight: 2, letterSpacing: 3 }}>
                Dejanos tus comentarios</h2>

            {comments.map((comment, index) => (
                <Comment key={index}
                 text={comment.text}  
                 timestamp={comment.timestamp} />
            ))}


            <div className="mt-2">
                <h4 className='font-medium text-xl text-gray-400'
                    style={{ fontFamily: "futurabook,serif", lineHeight: 2, letterSpacing: 3 }}>
                    Agregar un Comentario</h4>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const commentText = e.target.comment.value;
                    if (commentText) {
                        addComment(commentText);
                        e.target.comment.value = '';
                    }
                }}>
                    <textarea
                        className="w-full border rounded p-2 focus:outline-none focus:border-gray-500"
                        name="comment"
                        placeholder="Escribe tu comentario..."
                    />
                    <button
                        type="submit"
                        className="boton-enviar mt-2 text-white py-2 px-4 rounded block mx-auto"
                        style={{ fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }}
                    >
                        Agregar Comentario
                    </button>
                </form>
            </div>
        </div>

    );
};
Comment.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Comentarios;
