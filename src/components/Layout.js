import '../App.css';
import s from './layout.module.css'

function Layout({title = "no Title", descr = "without Description", urlBg, colorBg}) {
    const newStyle = {
        backgroundImage: `url("${urlBg}")`,
        background: `${colorBg}`,
    }
  return (
      <section className={s.root}>
          <div style={newStyle} className={s.wrapper}>
              <article>
                  <div className={s.title} >
                      {
                          {title} && <h3>{title}</h3>
                      }
                      <span className={s.separator}/>
                  </div>
                  <div className={s.desc.full}>
                      {
                          {descr} && <p>{descr}</p>
                      }
                  </div>
              </article>
          </div>
      </section>
  );
}

export default Layout;
