import images from './images';
import React,{useState} from 'react';
import './style.css'
function App() {
  const [selectedImage,setSelectedImage] = useState(images[0]);

  return (
    <div className='App'>
      <div className="container">
        <img src={selectedImage} alt="Selected" className="selected" />
        <div>
          <div className="imgContainer">
            {images.map((image,index)=>(

              <img src={image} key={index} onClick={()=>setSelectedImage(image)} alt='image'/>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
