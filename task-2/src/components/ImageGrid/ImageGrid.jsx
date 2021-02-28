import Image from "../Image/Image";
import './ImageGrid.scss'

function ImageGrid(props) {
    const {className, images} = props,
        imagesList = images.map((image) => (
        <Image key={image.id}
                 path={image.path}
        />
    ))


    return (
        <div className={className}>
            {imagesList}
        </div>
    );
}

export default ImageGrid;