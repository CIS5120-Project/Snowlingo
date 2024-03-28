import { useNavigate } from 'react-router-dom';

function Lesson() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/unit?id=123');
  }

  return (
    <button onClick={handleClick}>Go to Unit 123</button>
  );
}

export default Lesson;
