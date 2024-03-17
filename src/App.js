import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import Login from './Actualcomponents/project/Login';
import Technologies from './Actualcomponents/project/Technologies';


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Rootcomponent from './Actualcomponents/project/Rootcomponent';
import Home from './Actualcomponents/project/Home';
import Java from './Actualcomponents/project/Java';
import Sql from './Actualcomponents/project/Sql';
import Python from './Actualcomponents/project/Python';
import Register from './Actualcomponents/project/Register';
import UserDashed from './Actualcomponents/project/UserDashed';



function App() {
  
  let router=createBrowserRouter([
   {
    path:"",
    element:<Rootcomponent/>,
    children:[
     {
      path:"",
      element:<Home/>
     },
     {
      path:"Login",
      element:<Login/>
     },
     {
      path:"Register",
      element:<Register/>
     },
     {
      path:"UserDashed/:username",
      element:<UserDashed/>
     },
     {
         path:"Technologies",
         element:<Technologies/>,
         children:[
          {
            path:"Java",
            element:<Java/>
          },
          {
            path:"Sql",
            element:<Sql/>
          },
          {
            path:"Python",
            element:<Python/>
          }
         ]
     }
  ]
   }

  ])
 return(
  <div>
     
     
     
    <RouterProvider router={router}/>
  
    </div>
  );
}

export default App;
