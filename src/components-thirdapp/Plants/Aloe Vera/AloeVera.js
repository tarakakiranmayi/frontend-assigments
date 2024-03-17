import React from 'react';
import '.Rose.css';

function AloeVera() {
  return (
    <div>
      <header>
        <h1>Plant Growing Guide - Aloe Vera</h1>
      </header>

      <main>
        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <div className='col-lg-6 col-xl-6 h-100'>
              <img src="" alt="Aloe Vera Plant" width="100%" height="100%" className='AloeVera1' />
            </div>
            <div className='col-lg-6 col-xl-6 h-100 AloeVeratext1 shadow-lg p-5' style={{ height: "100%" }}>
              <h2>How to Grow Aloe Vera</h2>
              <p>Aloe Vera is a versatile succulent known for its medicinal properties. Follow these steps to grow Aloe Vera:</p>
              <ol>
                <li><strong>Choose the Right Variety:</strong> Select a suitable variety of Aloe Vera for cultivation.</li>
                <li><strong>Container or Ground:</strong> Aloe Vera can be grown in containers or directly in the ground.</li>
                <li><strong>Well-Draining Soil:</strong> Use well-draining soil with a mix of sand and potting mix.</li>
                <li><strong>Sunlight:</strong> Aloe Vera prefers bright, indirect sunlight. It can also tolerate some direct sunlight.</li>
                <li><strong>Watering:</strong> Allow the soil to dry out between waterings. Overwatering can lead to root rot.</li>
                <li><strong>Temperature:</strong> Aloe Vera thrives in warm temperatures but can tolerate mild frost.</li>
                <li><strong>Harvesting Gel:</strong> Harvest Aloe Vera gel by cutting leaves near the base. Use the gel for various skin and health benefits.</li>
                <li><strong>Pest and Disease Resistance:</strong> Aloe Vera is resistant to many pests and diseases.</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <h2>Common Aloe Vera Issues</h2>
            <div>
              <h4>Be aware of these common issues with Aloe Vera:</h4>
              <ul style={{ listStyle: "none" }}>
                <li className='display-4'>Overwatering</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common Aloe Vera issues */}
                  <div className='col-lg-4 '><img src="" alt="Overwatering" width="75%" height="75%" className='AloeVera1' /></div>
                  <div className='col-lg-4'><img src="" alt="Overwatering" width="75%" height="75%" className='AloeVera1' /></div>
                  <div className='col-lg-4'><img src="" alt="Overwatering" width="75%" height="75%" className='AloeVera1' /></div>
                </div>
                <li className='display-4'>Sunburn</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common Aloe Vera issues */}
                  <div className='col-lg-4 '><img src="" alt="Sunburn" width="75%" height="75%" className='AloeVera1' /></div>
                  <div className='col-lg-4'><img src="" alt="Sunburn" width="75%" height="75%" className='AloeVera1' /></div>
                  <div className='col-lg-4'><img src="" alt="Sunburn" width="75%" height="75%" className='AloeVera1' /></div>
                </div>
              </ul>
              <h3>Take preventive measures and adjust care accordingly.</h3>
            </div>
          </div>
        </section>

        <section>
          <h2>Growth Time of Aloe Vera</h2>
          <p>Aloe Vera plants typically start producing offsets within a year. The main plant can be harvested for gel once it reaches maturity.</p>
          <img className="d-block mx-auto" src="" alt="Aloe Vera Growth" width="75%" height="75%"></img>
        </section>

        <section>
          <h2>Nutrients for Aloe Vera</h2>
          <p className='display-6'>Aloe Vera benefits from essential nutrients,<br /> including:</p>
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
          <p className='text-success fs-5'>Aloe Vera thrives in warm, arid conditions. It can tolerate drought but should be protected from freezing temperatures.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Plant Growing Guide</p>
      </footer>
    </div>
  );
}

export default AloeVera;
