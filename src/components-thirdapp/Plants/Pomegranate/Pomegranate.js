import React from 'react';
import '.Rose.css';

function Pomegranate() {
  return (
    <div>
      <header>
        <h1>Plant Growing Guide - Pomegranate</h1>
      </header>

      <main>
        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <div className='col-lg-6 col-xl-6 h-100'>
              <img src="" alt="Pomegranate Plant" width="100%" height="100%" className='Pomegranate1' />
            </div>
            <div className='col-lg-6 col-xl-6 h-100 Pomegranatetext1 shadow-lg p-5' style={{ height: "100%" }}>
              <h2>How to Grow Pomegranate</h2>
              <p>Pomegranate is a delicious and nutritious fruit. Follow these steps to grow pomegranate:</p>
              <ol>
                <li><strong>Choose the Right Variety:</strong> Select a pomegranate variety suitable for your climate.</li>
                <li><strong>Planting Location:</strong> Plant pomegranate in a sunny location with well-drained soil.</li>
                <li><strong>Soil Preparation:</strong> Ensure the soil is well-draining and slightly acidic to neutral (pH 5.5-7.0).</li>
                <li><strong>Planting:</strong> Dig a hole twice as wide as the root ball. Place the plant in the hole and backfill with soil.</li>
                <li><strong>Watering:</strong> Water regularly, especially during dry spells. Allow the soil to dry between watering.</li>
                <li><strong>Fertilizing:</strong> Use a balanced fertilizer in spring and late summer. Pomegranates are not heavy feeders.</li>
                <li><strong>Pruning:</strong> Prune to shape the tree and remove dead or crowded branches. Pomegranates can be grown as bushes or trees.</li>
                <li><strong>Pest Control:</strong> Keep an eye out for pests like aphids and scale. Use natural pesticides if needed.</li>
                <li><strong>Harvesting:</strong> Harvest ripe pomegranates when the skin has turned vibrant red. Cut the fruit from the tree with pruning shears.</li>
                <li><strong>Winter Care:</strong> Protect young plants from frost. Mature plants are hardy but may benefit from frost protection in extremely cold climates.</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <div className='row g-5 m-2' style={{ margin: "3rem" }}>
            <h2>Common Pomegranate Issues</h2>
            <div>
              <h4>Be aware of these common issues with pomegranate:</h4>
              <ul style={{ listStyle: "none" }}>
                <li className='display-4'>Aphid Infestation</li>
                <div className='row g-3 p-3 m-2'>
                  <div className='col-lg-4 '><img src="" alt="Aphid Infestation" width="75%" height="75%" className='Pomegranate1' /></div>
                  <div className='col-lg-4'><img src="" alt="Aphid Infestation" width="75%" height="75%" className='Pomegranate1' /></div>
                  <div className='col-lg-4'><img src="" alt="Aphid Infestation" width="75%" height="75%" className='Pomegranate1' /></div>
                </div>
                <li className='display-4'>Fruit Splitting</li>
                <div className='row g-3 p-3 m-2'>
                  <div className='col-lg-4 '><img src="" alt="Fruit Splitting" width="75%" height="75%" className='Pomegranate1' /></div>
                  <div className='col-lg-4'><img src="" alt="Fruit Splitting" width="75%" height="75%" className='Pomegranate1' /></div>
                  <div className='col-lg-4'><img src="" alt="Fruit Splitting" width="75%" height="75%" className='Pomegranate1' /></div>
                </div>
              </ul>
              <h3>Take preventive measures and address issues promptly.</h3>
            </div>
          </div>
        </section>

        <section>
          <h2>Growth Time of Pomegranate</h2>
          <p>Pomegranate trees generally start producing fruit within 2 to 3 years after planting.</p>
          <img className="d-block mx-auto" src="" alt="Pomegranate Growth" width="75%" height="75%"></img>
        </section>

        <section>
          <h2>Nutrients for Pomegranate</h2>
          <p className='display-6'>Pomegranates benefit from essential nutrients,<br /> including:</p>
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
          <p className='text-success fs-5'>Pomegranate trees thrive in warm and arid climates. They are drought-tolerant once established but benefit</p>
          </section>
      </main>

      <footer>
        <p>&copy; 2023 Plant Growing Guide</p>
      </footer>
    </div>
  );
}

export default Pomegranate;