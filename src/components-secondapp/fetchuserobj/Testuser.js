import Y from '../user/User'


function Testuser()
{  
   return(
   
  <div>
            <nav className="border-3   nav  shadow-lg ">
          <ul className="mt-3" >
          <img src="https://cdn-icons-png.flaticon.com/512/7133/7133312.png" alt="" width="40px" className="h-100"/>
            <li>Home</li>

            <li>Details</li>
            <li>Shop</li>
            <li>More</li>
          </ul>

        </nav>
        <div className="container">
          
            <Y/>
           
             
          </div>

      
     
     <div className="footer bg-dark">
      <ul className="text-light m-3">
        <li>HNO:1-9-127</li>
        <li>PHONENO:+91-3456764</li>
        <li>HYDERABAD</li>
        <li>PINCODE:500062</li>
      </ul>

     </div>
    </div>
   );
}
export default Testuser;