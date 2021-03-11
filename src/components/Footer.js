import '../App.css';
import s from './footer.module.css'

function Footer() {
  return (
    <footer>
        <div className={s.wrapper}>
            <h3>THANKS FOR THE TRAINING</h3>
            <p>© 2021 #ReactMarathon.</p>
        </div>
    </footer>
  );
}

export default Footer;
