import React from 'react';

import { Footer , NEZ, About, Possibility, Header, Features} from './container';
import {  Brand,   Navbar} from './components';
import './App.css'
const App = () => {
    return(
        <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
            </div>
            <Brand />
           
         
        
         
     
            
            
          
            
            <About />
            <Features/>
            
            
            
            <Possibility/>
            <NEZ/>
            <Footer />
            </div>
            

    )

}
export default App;