import style from './mainButton.module.css';
const MainButton = (props) => {
    const { text = "Click me", color = "dark" } = props;

    const getColor = () => {
        switch (color) {
            case "dark":
                return style.radiusXS;
            case "red":
                return style.radiusSM;
            case "yellow":
                return style.radiusMD;
            case "white":
                return style.radiusSML;
            default:
                return style.main;
        }
    };


    return <button className={`${getColor()} ${style.normal}`}>{text}</button>;
}



export default MainButton;