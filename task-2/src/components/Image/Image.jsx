import Close from "../Close/Close";
import './Image.scss';

function Image(props) {
    const { path } = props;

    return (
        <div className="img-wrapper">
            <img className="img" src={path} alt="task-2" />
            <Close />
        </div>
    );
};

export default Image;