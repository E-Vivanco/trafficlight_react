//import logo from './logo.svg';
import { useState } from 'react';
import './index.css';

function App() {
  const [color, setColor] =useState("red")
  return(
  <>
  
  <div className='brazo_semaforo'>
      <div className='semaforo  mb-5 my-5'>
          <div className='row'>
                  <div className='col-12 col-md-12 col-sm-12 red_ligth'>
                    <button className={'btn btn-outline-danger '+(color === 'red'? "active": " ")} onClick={()=>setColor('red')}>                        
                      <i className="fa-solid fa-circle mx-2" ></i></button>
                     
                  </div>
                   <div className='col-12 col-md-12 col-sm-12 amarilla_ligth'>
                   <button className={'btn btn-outline-yellow '+(color === 'yellow'? "active": " ")} onClick={()=>setColor('yellow')}>
                   <i className="fa-regular fa-circle mx-2"></i></button>
                      
                   </div>
                  <div className='col-12 col-md-12 col-sm-12 verde_ligth'>
                  <button className={'btn btn-outline-success '+(color === 'green'? "active": " ")} onClick={()=>setColor('green')}>
                  <i className="fa-regular fa-circle mx-2"></i></button>
                  </div>
          </div>
      </div>
  </div>
  
  </>
 )
}

export default App;
