import logo from './logo.svg';
import img1 from './img1.jpg';
import img2 from './img2.gif';
import './App.css';
import dialog from './component/dialog';
import React from 'react';
import img3 from './img3.jpg'

function App() {
  //use states for those 3 images
  const [open, setOpen] = React.useState(false);
  const [image, setImg] = React.useState(false);
  const [image2, setImage] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);

  }

  return (
    <div className="App">
      {/* <h1>Hi </h1> */}

      <img src={img1} alt=""></img>
      <button onClick={handleClickToOpen}>Open Demo</button>
      //dialog box with images

      <dialog className='dialogbox' open={open} >
        <dialogContent>
          <img className='Dialogimg' src={img1} />
        </dialogContent>

        // code for showing loading gif
        <button onClick={() => {
          setImage(false);
          setTimeout(() => setImg(false), 7000); // this line collapse the image after 7 second

          setOpen(false);
          setImg(!image);
        }}>Show Gif</button>

       
        <button className="btn" onClick={() => {
          setImg(false);
          setOpen(false);
          setImage(!image2);
        }} >Show Graph</button>


      </dialog>
       
      {image && <img className='loadimg' image={image} src={img2}></img>}
      {image2 && <img image2={image2} src={img3}></img>}




    </div>
  );
}

export default App;
