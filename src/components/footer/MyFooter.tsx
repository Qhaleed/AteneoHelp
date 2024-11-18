import "./footer.css";
function MyFooter() {
  return (
    <footer className="improved-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">TEKKEN</h3>
          <p>Experience the ultimate fighting game.</p>
          <div className="social-icons"></div>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">EULA</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ateneo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default MyFooter;
