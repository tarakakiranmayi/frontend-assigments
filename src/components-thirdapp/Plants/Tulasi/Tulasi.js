import React from 'react';
import '.Rose.css';

function Tulsi() {
  return (
    <div>
      <header>
        <h1>Plant Growing Guide - Tulsi (Holy Basil)</h1>
      </header>

      <main>
        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <div className='col-lg-6 col-xl-6 h-100'>
              <img src="" alt="Tulsi Plant" width="100%" height="100%" className='Tulsi1' />
            </div>
            <div className='col-lg-6 col-xl-6 h-100 Tulsitext1 shadow-lg p-5' style={{ height: "100%" }}>
              <h2>How to Grow Tulsi (Holy Basil)</h2>
              <p>Tulsi, also known as Holy Basil, is a sacred herb in Hindu culture. Follow these steps to grow Tulsi:</p>
              <ol>
                <li><strong>Choose the Right Variety:</strong> Select a variety of Tulsi suitable for your climate.</li>
                <li><strong>Planting Location:</strong> Plant Tulsi in a sunny location with well-drained soil.</li>
                <li><strong>Soil Preparation:</strong> Ensure the soil is enriched with organic matter. Tulsi prefers slightly acidic soil.</li>
                <li><strong>Watering:</strong> Keep the soil consistently moist, especially during dry periods.</li>
                <li><strong>Harvesting:</strong> Harvest Tulsi leaves regularly to promote bushier growth.</li>
                <li><strong>Pruning:</strong> Prune the plant to remove dead or leggy branches and encourage a compact shape.</li>
                <li><strong>Pest Control:</strong> Keep an eye out for pests like aphids and caterpillars. Use natural pesticides if needed.</li>
                <li><strong>Fertilizing:</strong> Use a balanced fertilizer during the growing season.</li>
                <li><strong>Temperature:</strong> Tulsi prefers warm temperatures and can be grown as an annual in cooler climates.</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <h2>Common Tulsi Issues</h2>
            <div>
              <h4>Be aware of these common issues with Tulsi:</h4>
              <ul style={{ listStyle: "none" }}>
                <li className='display-4'>Powdery Mildew</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common Tulsi issues */}
                  <div className='col-lg-4 '><img src="" alt="Powdery Mildew" width="75%" height="75%" className='Tulsi1' /></div>
                  <div className='col-lg-4'><img src="" alt="Powdery Mildew" width="75%" height="75%" className='Tulsi1' /></div>
                  <div className='col-lg-4'><img src="" alt="Powdery Mildew" width="75%" height="75%" className='Tulsi1' /></div>
                </div>
                <li className='display-4'>Aphid Infestation</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common Tulsi issues */}
                  <div className='col-lg-4 '><img src="" alt="Aphid Infestation" width="75%" height="75%" className='Tulsi1' /></div>
                  <div className='col-lg-4'><img src="" alt="Aphid Infestation" width="75%" height="75%" className='Tulsi1' /></div>
                  <div className='col-lg-4'><img src="" alt="Aphid Infestation" width="75%" height="75%" className='Tulsi1' /></div>
                </div>
              </ul>
              <h3>Take preventive measures and address issues promptly.</h3>
            </div>
          </div>
        </section>

        <section>
          <h2>Growth Time of Tulsi</h2>
          <p>Tulsi plants generally start growing vigorously within a few weeks. Regular harvesting promotes continuous growth.</p>
          <img className="d-block mx-auto" src="" alt="Tulsi Growth" width="75%" height="75%"></img>
        </section>

        <section>
          <h2>Nutrients for Tulsi</h2>
          <p className='display-6'>Tulsi benefits from essential nutrients,<br /> including:</p>
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
          <p className='text-success fs-5'>Tulsi prefers warm and tropical climates. Protect from cold temperatures and provide adequate sunlight.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Plant Growing Guide</p>
      </footer>
    </div>
  );
}

export default Tulsi;
