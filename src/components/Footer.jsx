import './Footer.css';

import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 530 });
  return (
    <>
      <div className="whiteContainer"></div>
      <footer>
        {isLargeScreen ? (
          <h4>Powered by cutting-edge technology and 💖 for innovation</h4>
        ) : (
          <h4> Passion 💖 for innovation</h4>
        )}
        <h4 className="footerText"> Champion Group ✌</h4>
      </footer>
    </>
  );
};

export default Footer;
