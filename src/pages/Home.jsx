import './Home.css';

import { useAuth } from '../contexts/authContext';

export const Home = () => {
  const { user } = useAuth();

  return <div className="home-container"></div>;
};
