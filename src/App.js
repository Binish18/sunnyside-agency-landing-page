import './App.css';
import logo from './images/logo.svg'
import logo1 from './images/Vector.svg'
import arrow from './images/icon-arrow-down.svg'
import egg from './images/desktop/image-transform.jpg'
import Second from './Second';
import test1 from './images/image-emily.jpg'
import test2 from './images/image-jennie.jpg'
import test3 from './images/image-thomas.jpg'
import pic1 from './images/desktop/image-gallery-milkbottles.jpg'
import pic2 from './images/desktop/image-gallery-orange.jpg'
import pic3 from './images/desktop/image-gallery-cone.jpg'
import pic4 from './images/desktop/image-gallery-sugarcubes.jpg'


function App() {


return (
<>
<div>
  {/* Navbar  */}
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark  p-md-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo} width="150"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="mx-auto" />
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <a className="nav-link text-white" href="#">About</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link text-white" href="#">Services</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link text-white" href="#">Projects</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Banner Image  */}
  <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
    <div className="content text-center">
      <h1 className="text-white mb-5">WE ARE CREATIVES</h1>
      <img src={arrow} width="30" />
    </div>
  </div>
 
  </div>
 <div class="row">
  <div class="col-lg-6 col-md-12 col-sm-12 mt-5">
    <h1 class="mt-5 ms-4 mb-5" >Transform your <br/> brand</h1>
    <p class="mt-3 ms-4 mb-5">We are a full-service creative agency specializing in <br/> helping brands grow fast. 
      Engage your clients through <br/> compelling visuals that do most of the marketing for you.
    </p>
    <a href="#" class="ms-4 mt-5 text-dark" id="learn">LEARN MORE</a>
  </div>
  <div class="col-lg-6 col-md-12 col-sm-12">
    <img class="img-fluid" src={egg} />
  </div>

 

</div>
<Second/>
<div class="row">
 
 <div class="col-lg-6 col-md-12 col-sm-12">
 <div class="card text-center ">
    <div class="card-body" style={{marginTop:"20rem"}}>
      <h5 class="card-title mt-5">Graphic design</h5>
      <p class="card-text mt-1">Great design makes you memorable.
       We deliver <br/> artwork that underscores your brand message
       <br/> and captures potential clients’ attention</p>
    </div>
  </div>
</div>
 
 <div class="col-lg-6 col-md-12 col-sm-12 ">
 <div class="card text-center" id="card">
    <div class="card-body" style={{marginTop:"20rem"}}>
      <h5 class="card-title mt-5" id="card-body" >Photography</h5>
      <p class="card-text mt-1 "  id='card-text'>Increase your credibility by getting the most <br/> stunning, high-quality photos that improve your <br/> business image.</p>
    </div>
  </div>
 </div>



</div>
<div class="container mt-5 mb-5">
  <h2 className='text-center mb-5'>  CLIENT  TESTIMONIALS</h2>
  <div class="row g-2 mb-4">
    <div class="col-md-4">
    <div class="card p-3 text-center px-4" id="test-card">
                
                <div class="user-image">
                    
            <img src={test1} class="rounded-circle" width="60"
                    />
                    
                </div>
                
                <div class="user-content mt-4">
                    
                   
                    <p style={{marginBottom:'2.6rem'}}> We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <h5 class="mb-0" id='test-text'> Emily R.</h5>
                    <span>  Marketing Director</span>
                </div>
                
             
            </div>
    </div>
    <div class="col-md-4">
    <div class="card p-3 text-center px-4" id="test-card">
                
                <div class="user-image">
                    
            <img src={test2} class="rounded-circle" width="60"
                    />
                    
                </div>
                
                <div class="user-content mt-4">
                    
                   
                    <p  style={{marginBottom:'2.6rem'}}>  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <h5 id='test-text'>  Jennie F.</h5>
                    <span>Business Owner</span>
                </div>
                
             
            </div>
    </div>
    <div class="col-md-4">
    <div class="card p-3 text-center px-4" id="test-card">
                
                <div class="user-image">
                    
            <img src={test3} class="rounded-circle" width="60"
                    />
                    
                </div>
                
                <div class="user-content mt-4">
                    
                   
                    <p> Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience..</p>
                    <h5 class="mb-0" id='test-text'> Thomas S.</h5>
                    <span>Chief Operating Officer</span>
                </div>
                
             
            </div>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>

<div className='mt-5'></div>
  <div class="row g-0 mt-5">
    <div class="col-md-3">
   <img  className="img-fluid" src={pic1}/>
    </div>
    <div class="col-md-3">
    <img  className="img-fluid"src={pic2}/>
    </div>
    <div class="col-md-3">
    <img  className="img-fluid" src={pic3}/>
    </div>
    <div class="col-md-3">
    <img  className="img-fluid" src={pic4}/>
    </div>
  </div>
   <div  className='py-5' style={{backgroundColor:"hsl(168, 34%, 41%)"}}>
   <h2 class='text-center pt-5'><img src={logo1} width="150" /></h2>
  <ul className='d-flex justify-content-center mt-5'>
    <li className=''>About</li>
    <li className='ms-5'>Services</li>
    <li className='ms-5'>Projects</li>
  </ul>
  <ul className='d-flex justify-content-center mt-5 '>
    <li className='icon'><i class="fa-brands fa-square-facebook"></i></li>
    <li className='icon ms-3'><i class="fa-brands fa-instagram"></i></li>
    <li className='icon ms-3'><i class="fa-brands fa-twitter" ></i></li>
    <li className='icon ms-3'><i class="fa-brands fa-pinterest" ></i></li>
  </ul>
   </div>

</>
  );
}


export default App;


/* */