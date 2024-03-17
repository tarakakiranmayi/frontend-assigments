import React from 'react';
import './Rose.css'

function Rose() {
  return (
    <div>
        <header>
        <h1>Plant Growing Guide</h1>
    </header>

    <main>
        <section>
            <div className='row g-5 m-2' style={{margin:"3rem"}}>
             <div className='col-lg-6 col-xl-6 h-100'>
                  <img src="https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054" alt="" width="100%" height="100%"  className='Rose1'/>
             </div>
                <div className='col-lg-6 col-xl-6 h-100 Rosetext1 shadow-lg p-5' style={{height:"100%"}}>
            <h2>How to Grow Roses</h2>
            <p>Roses are beautiful flowers. Follow these steps to grow roses:</p>
            <ol>
               
                <li><strong>Choose the Right Variety:</strong> Select a rose variety that suits your climate and soil conditions.</li>
                <li><strong>Select a Suitable Location:</strong> Pick a sunny spot with well-draining soil for your rose garden.</li>
                <li><strong>Prepare the Soil:</strong> Ensure the soil is rich in organic matter. Roses prefer slightly acidic soil (pH 6.0-6.5).</li>
                <li><strong>Planting:</strong> Dig a hole large enough to accommodate the roots without bending. Place the rose plant in the hole and cover the roots with soil.</li>
                <li><strong>Watering:</strong> Water deeply after planting and keep the soil consistently moist, especially during dry periods.</li>
                <li><strong>Mulching:</strong> Apply a layer of mulch around the base of the rose plant to retain moisture and suppress weeds.</li>
                <li><strong>Pruning:</strong> Regularly prune dead or diseased branches and shape the plant to encourage air circulation.</li>
                <li><strong>Fertilizing:</strong> Use a balanced fertilizer formulated for roses during the growing season.</li>
                <li><strong>Pest and Disease Control:</strong> Keep an eye out for pests and common diseases. Treat promptly with suitable organic pesticides or fungicides.</li>
                <li><strong>Support Structures:</strong> Provide support for climbing or large rose varieties using stakes or trellises.</li>
                <li><strong>Enjoy Blooms:</strong> With proper care, your rose plants will reward you with beautiful blooms. Regularly deadhead spent flowers to encourage continuous blooming.</li>
            </ol>
            </div>
            </div>
        </section>

        <section>
        <div className='row g-5 m-2' style={{margin:"3rem"}}>
        <h2>Common Rose Diseases</h2>
           
            <div className=''>
           
            <h4>Be aware of these common rose diseases:</h4>
            <ul className='' style={{listStyle:"none"}}>
                <li  className='display-4'>Black Spot</li>
                <div className='row g-3 p-3 m-2'>
                  <div className='col-lg-4 '><img src="https://www.notcutts.co.uk/wordpress/wp-content/uploads/2018/11/rose-black-spot-f.jpg" alt="" width="75%" height="75%"  className='Rose1' /></div>
                  <div className='col-lg-4'><img src="https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-03/HGIC_shrubs_blackspot_rose_16x9.jpg?itok=v_7eU6OZ" alt="" width="75%" height="75%"  className='Rose1' /></div>
                  <div className='col-lg-4'><img src="https://hortnews.extension.iastate.edu/files/article/images/191_0.jpg" alt="" width="75%" height="75%"  className='Rose1' /></div>
                </div>
                <li  className='display-4'>Powdery Mildew</li>
                <div className='row g-3 p-3 m-2'>
                  <div className='col-lg-4 '><img src="https://plantura.garden/uk/wp-content/uploads/sites/2/2021/11/mildew-on-roses.jpg" alt="" width="75%" height="75%"  className='Rose1' /></div>
                  <div className='col-lg-4 '><img src="https://extension.okstate.edu/programs/digital-diagnostics/plant-diseases/site-files/powdery-mildew-on-rose/pm-rose1.jpg" alt="" width="75%" height="75%"  className='Rose1' /></div>
                  <div className='col-lg-4 '><img src="https://www.treloarroses.com.au/image/catalog/Rose%20Care%20And%20Help/Powdery%20Mildew_1.jpg" alt="" width="75%" height="75%"  className='Rose1' /></div>
                </div>
                <li  className='display-4'>Rust</li>
                <div className='row g-3 p-3 m-2'>
                  <div className='col-lg-4 '><img src="https://gardenerspath.com/wp-content/uploads/2023/03/How-to-Identify-and-Treat-Rose-Rust-Feature.jpg" alt="" width="75%" height="75%"  className='Rose1' /></div>
                  <div className='col-lg-4'><img src="https://www.greenlife.co.ke/wp-content/uploads/2022/04/disease_rose_rust.jpg" alt="" width="75%" height="75%"  className='Rose1' /></div>
                  <div className='col-lg-4 '><img src="https://www.thefragrantrosecompany.co.uk/wp/wp-content/uploads/2020/01/how-to-treat-rose-rust-and-blackspot.jpg" alt="" width="75%" height="75%"  className='Rose1' /></div>
                </div>
            </ul>
            <h3>Take preventive measures and use suitable fungicides.</h3>
            </div>
            </div>
        </section>
        

        <section>
            <h2>Growth Time of Roses</h2>
            <p>The growth time of roses varies by type, but generally, they start blooming in the first season and continue to flourish in subsequent years.</p>
            <img  className="d-block mx-auto"src="https://www.shutterstock.com/image-vector/cycle-red-rose-plant-growth-260nw-1383279806.jpg" alt="" width="75%" height="75%"></img>
        </section>

        <section>
            <h2>Nutrients for Roses</h2>
            <p className='display-6'>Roses benefit from essential nutrients,<br/> including:</p>
            <ul className='d-flex text-center' style={{listStyle:"none",justifyContent:"space-around"}}>
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
            <p className='text-success fs-5'>Roses generally prefer a moderate climate. Ensure they receive adequate sunlight and protection from extreme weather conditions.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Plant Growing Guide</p>
    </footer>
    </div>
  )
}

export default Rose