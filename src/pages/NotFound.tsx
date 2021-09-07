import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div>
    <h1>404 notFound.</h1>
    <p>
      Back to - <Link to="/dashboard">Home</Link>
    </p>
  </div>
);

export default NotFound;
