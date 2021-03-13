import '../App.css';
import s from './layout.module.css'

function Layout({title = "no Title", urlBg, colorBg, children}) {
    const newStyle = {
        backgroundImage: `url("${urlBg}")`,
        background: `${colorBg}`,
    }
    return (
        <section className={s.root}>
            <div style={newStyle} className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        {
                            {title} && <h3>{title}</h3>
                        }
                        <span className={s.separator}/>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;
