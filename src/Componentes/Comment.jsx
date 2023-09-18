import PropTypes from 'prop-types';

const Comment = ({text, timestamp }) => {
  return (
    <div className="border p-3 mb-">
      <p>{text}</p>
      <p className="text-sm text-gray-500 mt-1">{timestamp}</p>
    </div>
  );
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired, // Agregar este propType
};

export default Comment;

