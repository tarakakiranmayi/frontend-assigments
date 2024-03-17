import React from 'react';
import '.Rose.css';

function CurryLeaf() {
  return (
    <div>
      <header>
        <h1>Plant Growing Guide - Curry Leaf</h1>
      </header>

      <main>
        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <div className='col-lg-6 col-xl-6 h-100'>
              <img src="" alt="Curry Leaf Plant" width="100%" height="100%" className='CurryLeaf1' />
            </div>
            <div className='col-lg-6 col-xl-6 h-100 CurryLeaftext1 shadow-lg p-5' style={{ height: "100%" }}>
              <h2>How to Grow Curry Leaves</h2>
              <p>Curry leaves are aromatic herbs used in various cuisines. Follow these steps to grow curry leaves:</p>
              <ol>
                <li><strong>Choose the Right Variety:</strong> Select a curry leaf variety suitable for your climate and soil conditions.</li>
                <li><strong>Select a Suitable Location:</strong> Plant curry leaves in a sunny area with well-draining soil.</li>
                <li><strong>Prepare the Soil:</strong> Curry leaves prefer well-draining soil enriched with organic matter.</li>
                <li><strong>Planting:</strong> Plant curry leaf seeds or saplings, ensuring proper spacing between plants.</li>
                <li><strong>Watering:</strong> Keep the soil consistently moist, especially during the dry season.</li>
                <li><strong>Mulching:</strong> Apply a layer of mulch to retain moisture and regulate soil temperature.</li>
                <li><strong>Pruning:</strong> Prune regularly to maintain shape and encourage new growth.</li>
                <li><strong>Fertilizing:</strong> Use a balanced fertilizer during the growing season to promote healthy foliage.</li>
                <li><strong>Pest and Disease Control:</strong> Watch for pests like aphids and diseases like leaf spot. Use appropriate treatments as needed.</li>
                <li><strong>Harvesting:</strong> Harvest curry leaves as needed, and avoid stripping all leaves from a branch.</li>
                <li><strong>Container Growing:</strong> Curry leaf plants can be grown in containers, making them suitable for smaller spaces.</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <h2>Common Curry Leaf Issues</h2>
            <div>
              <h4>Be aware of these common issues with curry leaves:</h4>
              <ul style={{ listStyle: "none" }}>
                <li className='display-4'>Aphids</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common curry leaf issues */}
                  <div className='col-lg-4 '><img src="" alt="" width="75%" height="75%" className='CurryLeaf1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='CurryLeaf1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='CurryLeaf1' /></div>
                </div>
                <li className='display-4'>Leaf Spot</li>
                <div className='row g-3 p-3 m-2'>
                  {/* Add images for common curry leaf issues */}
                  <div className='col-lg-4 '><img src="" alt="" width="75%" height="75%" className='CurryLeaf1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='CurryLeaf1' /></div>
                  <div className='col-lg-4'><img src="" alt="" width="75%" height="75%" className='CurryLeaf1' /></div>
                </div>
              </ul>
              <h3>Take preventive measures and treat promptly if issues arise.</h3>
            </div>
          </div>
        </section>

        <section>
          <h2>Growth Time of Curry Leaves</h2>
          <p>Curry leaf plants typically start producing leaves within a few months of planting. They continue to grow and can be harvested regularly.</p>
          <img className="d-block mx-auto" src="" alt="" width="75%" height="75%"></img>
        </section>

        <section>
          <h2>Nutrients for Curry Leaves</h2>
          <p className='display-6'>Curry leaves benefit from essential nutrients,<br /> including:</p>
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
          <p className='text-success fs-5'>Curry leaf plants thrive in warm and humid conditions. They should be protected from frost and extreme cold.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Plant Growing Guide</p>
      </footer>
    </div>
  );
}

export default CurryLeaf;
