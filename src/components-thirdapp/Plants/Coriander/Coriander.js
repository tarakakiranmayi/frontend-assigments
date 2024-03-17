import React from 'react';
import '.Rose.css';

function Coriander() {
  return (
    <div>
      <header>
        <h1>Plant Growing Guide - Coriander</h1>
      </header>

      <main>
        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <div className='col-lg-6 col-xl-6 h-100'>
              <img src="" alt="Coriander Plant" width="100%" height="100%" className='Coriander1' />
            </div>
            <div className='col-lg-6 col-xl-6 h-100 Coriandertext1 shadow-lg p-5' style={{ height: "100%" }}>
              <h2>How to Grow Coriander</h2>
              <p>Coriander, also known as cilantro or Chinese parsley, is a popular herb used in various cuisines. Follow these steps to grow coriander:</p>
              <ol>
                <li><strong>Choose the Right Variety:</strong> Select a coriander variety suitable for your climate and soil conditions.</li>
                <li><strong>Select a Suitable Location:</strong> Plant coriander in a location with partial shade to prevent it from bolting too quickly.</li>
                <li><strong>Prepare the Soil:</strong> Coriander prefers well-draining soil rich in organic matter.</li>
                <li><strong>Planting:</strong> Sow coriander seeds directly in the soil or in containers, ensuring proper spacing.</li>
                <li><strong>Watering:</strong> Keep the soil consistently moist, especially during the germination period.</li>
                <li><strong>Harvesting:</strong> Harvest coriander leaves when they are young for the best flavor. Allow some plants to bolt and produce seeds (coriander spice).</li>
                <li><strong>Container Growing:</strong> Coriander can be grown in pots or containers on balconies or windowsills.</li>
                <li><strong>Pest and Disease Control:</strong> Watch for pests like aphids and diseases like powdery mildew. Use appropriate treatments as needed.</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <h2>Common Coriander Issues</h2>
            <div>
              <h4>Be aware of these common issues with coriander:</h4>
              <ul style={{ listStyle: "none" }}>
                <li className='display-4'>Bolting</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common coriander issues */}
                  <div className='col-lg-4 '><img src="" alt="" width="75%" height="75%" className='Coriander1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Coriander1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Coriander1' /></div>
                </div>
                <li className='display-4'>Powdery Mildew</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common coriander issues */}
                  <div className='col-lg-4 '><img src="" alt="" width="75%" height="75%" className='Coriander1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Coriander1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Coriander1' /></div>
                </div>
              </ul>
              <h3>Take preventive measures and treat promptly if issues arise.</h3>
            </div>
          </div>
        </section>

        <section>
          <h2>Growth Time of Coriander</h2>
          <p>Coriander leaves can be harvested in about 3-4 weeks after sowing. The plant will continue to produce leaves for several weeks.</p>
          <img className="d-block mx-auto" src="" alt="" width="75%" height="75%"></img>
        </section>

        <section>
          <h2>Nutrients for Coriander</h2>
          <p className='display-6'>Coriander benefits from essential nutrients,<br /> including:</p>
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
          <p className='text-success fs-5'>Coriander prefers cool weather and can bolt quickly in hot temperatures. Ensure adequate sunlight and water.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Plant Growing Guide</p>
      </footer>
    </div>
  );
}

export default Coriander;
