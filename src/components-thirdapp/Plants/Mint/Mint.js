import React from 'react';
import '.Rose.css';

function Mint() {
  return (
    <div>
      <header>
        <h1>Plant Growing Guide - Mint</h1>
      </header>

      <main>
        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <div className='col-lg-6 col-xl-6 h-100'>
              <img src="" alt="Mint Plant" width="100%" height="100%" className='Mint1' />
            </div>
            <div className='col-lg-6 col-xl-6 h-100 Minttext1 shadow-lg p-5' style={{ height: "100%" }}>
              <h2>How to Grow Mint</h2>
              <p>Mint is a fragrant herb. Follow these steps to grow mint:</p>
              <ol>
                <li><strong>Choose the Right Variety:</strong> Select a mint variety suitable for your climate and soil conditions.</li>
                <li><strong>Select a Suitable Location:</strong> Plant mint in a partially shaded area with well-draining soil.</li>
                <li><strong>Prepare the Soil:</strong> Mint prefers rich, moist soil with a slightly acidic to neutral pH.</li>
                <li><strong>Planting:</strong> Plant mint using cuttings or seedlings, as it tends to spread quickly.</li>
                <li><strong>Watering:</strong> Keep the soil consistently moist, and water when the top inch of soil feels dry.</li>
                <li><strong>Mulching:</strong> Apply a layer of mulch to retain moisture and suppress weeds around the mint plants.</li>
                <li><strong>Pruning:</strong> Regularly prune mint to control its growth and encourage bushiness.</li>
                <li><strong>Fertilizing:</strong> Mint doesn't require heavy fertilization. Use a balanced fertilizer sparingly.</li>
                <li><strong>Pest and Disease Control:</strong> Mint is generally resistant to pests, but watch for common issues like aphids. Treat with insecticidal soap if needed.</li>
                <li><strong>Container Growing:</strong> Mint can be grown in containers to prevent its aggressive spread in the garden.</li>
                <li><strong>Harvesting:</strong> Harvest mint leaves regularly for culinary use, and prune flowers to prevent the plant from becoming too leggy.</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <h2>Common Mint Issues</h2>
            <div>
              <h4>Be aware of these common issues with mint:</h4>
              <ul style={{ listStyle: "none" }}>
                <li className='display-4'>Aphids</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common mint issues */}
                  <div className='col-lg-4 '><img src="" alt="" width="75%" height="75%" className='Mint1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Mint1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Mint1' /></div>
                </div>
                <li className='display-4'>Mint Rust</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common mint issues */}
                  <div className='col-lg-4 '><img src="" alt="" width="75%" height="75%" className='Mint1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Mint1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='Mint1' /></div>
                </div>
              </ul>
              <h3>Take preventive measures and treat promptly if issues arise.</h3>
            </div>
          </div>
        </section>

        <section>
          <h2>Growth Time of Mint</h2>
          <p>Mint is a fast-growing herb that can be harvested within a few weeks of planting. It continues to spread and thrive under favorable conditions.</p>
          <img className="d-block mx-auto" src="" alt="" width="75%" height="75%"></img>
        </section>

        <section>
          <h2>Nutrients for Mint</h2>
          <p className='display-6'>Mint benefits from essential nutrients,<br /> including:</p>
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
          <p className='text-success fs-5'>Mint prefers a cool and moist climate. Ensure they receive partial sunlight and regular watering.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Plant Growing Guide</p>
      </footer>
    </div>
  );
}

export default Mint;
