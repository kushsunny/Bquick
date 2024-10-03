import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Welcome from './pages/welcomepage'
import OrderManagement from './pages/ordermanagement';

function App() {
  return (
    <div>
  
    {/* ............................routes..................... */}
<Routes>
  {/* ..........doo page hai eisliye dooroute ........... */}
  
  <Route path="/" element={<Welcome/>}/>
  <Route path="/welcome" element={<Welcome/>}/>
  <Route path="/order" element={<OrderManagement/>}/>
 
</Routes>
     
    </div>
  );
}

export default App;