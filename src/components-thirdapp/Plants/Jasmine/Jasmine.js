import React from 'react'
import '.Rose.css';
function Jasmine() {
  return (
    <div>
         <header>
        <h1>Plant Growing Guide - Jasmine</h1>
      </header>

      <main>
        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <div className='col-lg-6 col-xl-6 h-100'>
              <img src="" alt="Jasmine Plant" width="100%" height="100%" className='Jasmine1' />
            </div>
            <div className='col-lg-6 col-xl-6 h-100 Jasminetext1 shadow-lg p-5' style={{ height: "100%" }}>
              <h2>How to Grow Jasmine</h2>
              <p>Jasmine is a fragrant flowering plant. Follow these steps to grow jasmine:</p>
              <ol>
                <li><strong>Choose the Right Variety:</strong> Select a jasmine variety suitable for your climate and soil conditions.</li>
                <li><strong>Select a Suitable Location:</strong> Pick a sunny spot with well-draining soil for your jasmine garden.</li>
                <li><strong>Prepare the Soil:</strong> Ensure the soil is rich in organic matter. Jasmines prefer slightly acidic soil (pH 6.0-6.5).</li>
                <li><strong>Planting:</strong> Dig a hole large enough to accommodate the roots without bending. Place the jasmine plant in the hole and cover the roots with soil.</li>
                <li><strong>Watering:</strong> Water deeply after planting and keep the soil consistently moist, especially during dry periods.</li>
                <li><strong>Mulching:</strong> Apply a layer of mulch around the base of the jasmine plant to retain moisture and suppress weeds.</li>
                <li><strong>Pruning:</strong> Regularly prune dead or diseased branches and shape the plant to encourage air circulation.</li>
                <li><strong>Fertilizing:</strong> Use a balanced fertilizer formulated for jasmines during the growing season.</li>
                <li><strong>Pest and Disease Control:</strong> Keep an eye out for pests and common diseases like Yellowing Leaves and Root Rot. Treat promptly with suitable organic pesticides or fungicides.</li>
                <li><strong>Support Structures:</strong> Provide support for climbing jasmine varieties using stakes or trellises.</li>
                <li><strong>Enjoy Fragrance:</strong> With proper care, your jasmine plants will reward you with delightful fragrance. Prune spent flowers to encourage continuous blooming.</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <h2>Common Jasmine Diseases</h2>
            <div>
              <h4>Be aware of these common jasmine diseases:</h4>
              <ul style={{ listStyle: "none" }}>
                <li className='display-4'>Yellowing Leaves</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common jasmine diseases */}
                  <div className='col-lg-4 '><img src="" alt="" width="75%" height="75%" className='Jasmine1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Jasmine1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Jasmine1' /></div>
                </div>
                <li className='display-4'>Root Rot</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common jasmine diseases */}
                  <div className='col-lg-4 '><img src="" alt="" width="75%" height="75%" className='Jasmine1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Jasmine1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Jasmine1' /></div>
                </div>
              </ul>
              <h3>Take preventive measures and use suitable treatments.</h3>
            </div>
          </div>
        </section>

        <section>
          <h2>Growth Time of Jasmines</h2>
          <p>The growth time of jasmines varies by type, but generally, they start blooming in the first season and continue to flourish in subsequent years.</p>
          <img className="d-block mx-auto" src="" alt="" width="75%" height="75%"></img>
        </section>

        <section>
          <h2>Nutrients for Jasmines</h2>
          <p className='display-6'>Jasmines benefit from essential nutrients,<br /> including:</p>
          <ul className='d-flex text-center' style={{ listStyle: "none", justifyContent: "space-around" }}>
          <div>
                <li>Nitrogen</li>
                <img  src="https://nordfert.com/wp-content/uploads/2021/08/what-is-nitrogen-fertilizer.jpeg" alt="" width="75%" height="75%"  className='Rose1' />
                </div>
                <div>
                <li>Phosphorus</li>
                <img  src="https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjMzYWM3NTg5NTA5YmU2MzM3NTcxMzliLXRyaXBsZS1zdXBlci1waG9zcGhhdGUtMC00Ni0wLWZlcnRpbGl6ZXIuanBn.jpg" alt="" width="75%" height="75%"  className='Rose1' />
 </div>
                <div><li>Potassium</li>
                <img  src="https://tiimg.tistatic.com/fp/1/007/604/potassium-fertilizer-used-in-agriculture-868.jpg" alt="" width="75%" height="75%"  className='Rose1' />
 </div>
               <div> <li>Calcium</li>
               <img  src="https://rukminim2.flixcart.com/image/850/1000/jrgo4280/soil-manure/z/z/x/1-calcium-fertilizer-liquid-organic-for-plants-garden-green-dews-original-imafd8bgk6bng8kf.jpeg?q=90" alt="" width="75%" height="75%"  className='Rose1' />
 </div>
          </ul>
          <p className='text-danger fs-1'>Use a balanced fertilizer to provide these nutrients.</p>
        </section>

        <section>
          <h2>Weather Conditions</h2>
          <p className='text-success fs-5'>Jasmines generally prefer a moderate climate. Ensure they receive adequate sunlight and protection from extreme weather conditions.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023</p>
            </footer>
    </div>
  )
}

export default Jasmine