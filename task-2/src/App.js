import { useEffect, useState } from "react";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import axios from "axios";
import './App.scss';

function App() {
    const [images, setImages] = useState([]);

    useEffect(async () => {
        const result = await axios('/images.json');
        setImages(result.data)
    }, [])

  return (
    <div className="App">
        <ImageGrid className="wrapper" images={images}/>
    </div>
  );
}

export default App;
