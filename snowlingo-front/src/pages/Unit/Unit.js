import { useLocation } from 'react-router-dom';

function Unit() {
  const location = useLocation();

  // Use URLSearchParams to parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id'); // "123"

  return (
    <div>
      <h2>Unit Page</h2>
      <p>ID: {id}</p>
    </div>
  );
}

export default Unit;
