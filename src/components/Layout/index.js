import '../../App.css';
import s from './layout.module.css'
import classNames from "classnames";

function Layout({title, urlBg, colorBg, children}) {
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
                    <div className={classNames(s.desc, s.full)} >
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;
