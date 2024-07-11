
import time from "../helpers/time";
function Footer() {
  return (
    <footer>
      <p className="end-line">
        This website is made with ❤. © Copyright {time.getYear()}.
      </p>
    </footer>
  );
}

export default Footer;
