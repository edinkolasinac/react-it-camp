import style from './tabs.module.css';

const Tabs = (props) => {
    return <div className={style.tabsContainer}>

        <div className={`${style.tabsContainer} ${selected === 0 ? style.active : ""}`}>
            <p>iteam 1</p>







            <div className={`${style.tabsContainer} ${selected === 1 ? style.active : ""}`}>
                <p>iteam 2</p>
            </div>


        </div>

    </div>

    </div >
};


export default Tabs;