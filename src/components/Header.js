import '../App.css';
import s from './header.module.css'

function Header({title = "no Title", descr = "without Description"}) {
  return (
      <header className={s.root}>
          <div className={s.forest}/>
          <div className={s.container}>
              {
                  {title} && <h1>{title}</h1>
              }
              {
                  {descr} && <p>{descr}</p>
              }
          </div>
      </header>
  );
}

export default Header;
