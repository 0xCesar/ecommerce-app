
import image from './assets/main-img.png';
import image2 from './assets/secondary-img.png';
import arrowImage from './assets/arrow.svg';
import c from './assets/lilarrow.svg';
import panier from './assets/FramePanier.svg';
import InsulatedJacket from './assets/InsulatedJacket.png';
import nextButtonRD from './assets/next-button-rightdir.svg';
import nextButtonLD from './assets/next-button-leftdir.svg';
import secondaryBlockImage from './assets/secondaryBlockImage.png';
import secondaryBlockImage2 from './assets/secondaryBlockImage2.png';
import Btnmore from './assets/Btnmore.svg';
import Btnless from './assets/Btnless.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className='h100 w100 flex'>



        <div className='p215'>
          <div className='discover-block'>
            <h2>New collection</h2>
            <p>
              Find an outfit that will reflect your style and taste.
            </p>
            <div className='flex btn-explore'>
              <p>EXPLORE</p>
              <img src={arrowImage} alt='arrow next' />
            </div>
          </div>
        </div>


        <div className='p57' id="main-block">
          <header className='text-center'>
            <a>about</a>
            <a>stylists</a>
            <a>trends</a>
            <a>news</a>
          </header>
          <div className='container-main'>
            <h1>EXPLOSION</h1>
            <img src={image} alt='Cover Image'/>
            <h1>OF STYLE</h1>
          </div>
        </div>


        <div className='p215' id='right-main-block'>
          <img src={panier} className="margin-right-1vw" alt="panier" />
          <div className='next-block'>
            <img src={image2} alt="next image" />
            <p>Scroll to see more</p>
          </div>
          <img src={arrowImage} className="margin-right-1vw" alt="arrow next"/>
        </div>


        <div id="menu-background">
          <div id="menu">
            <div className='flex'>
              <h2>Panier</h2>
              <img src={panier} alt="Panier icon" />
            </div>
          </div>
        </div>
      </main>

      <div id="secondary-block" className='h85 w100 flex'>
        <div id="secondary-block-left" className='flex'>
          <img src={nextButtonLD} alt="button left direct" className='SBL-sideImage' />
          <img id="SBL-mainImage" src={secondaryBlockImage} alt="Image with someone" />
          <img id="SBL-secondImage" src={secondaryBlockImage2} alt="Second Image" />
          <img src={nextButtonRD} alt="button right direct" className='SBL-sideImage'/>
        </div>
      
        <div id="secondary-block-right">
            <div id="formAddingItem">
            <h2>Insulated Jacket</h2>
            <div id="size" className='flex'>
              <a>S</a>
              <a>M</a>
              <a className='active'>L</a>
              <a>XL</a>
            </div>
            <p>The insulated jacket is made of thin moisture-repellent polyester. 
              A thin layer of artificial insulation. <br></br>
              Details: Straight silhouette, zippered pockets, silk lining. Ideal for both tall and short girls.
            </p>
            <div className='flex btw' id="container-price">
              <h3 className='price'>250$</h3>
              <div className='flex' id="btn-add">
              <img src={Btnless} alt='Button substract one article'   class="less"/>
              <p id="currentHowMany">1</p>
              <img src={Btnmore} alt='Button adding more one article' class="more" />
              </div>
          
              
            </div>
            <button>ADD TO CARD</button>
            </div>
        </div>
      </div>

      <div>
      </div>
    </div>
  );
}

export default App;
