import React from 'react'
import './Tomato.css';
import pic1 from './pic1.jpeg'
import pic2 from './pic2.jpeg'
import pic3 from './pic3.jpeg'
import Alternaria_solani from './Alternaria solani.jpeg' 
import LateBlight from './LateBlight.jpeg'
import SeptoriaLeafSpot from './SeptoriaLeafSpot.jpeg'

function Tomato() {
  return (
    <div>
        <div>
            <div className='col-lg-12 row'>
                <div className='col-lg-4'><img className='tomatoImage' src={pic1}></img></div>
                <div className='col-lg-4'><img className='tomatoImage' src={pic2}></img></div>
                <div className='col-lg-4'><img className='tomatoImage' src={pic3}></img></div>
            </div>
            <div className='plantLifcycle'>
                <center><h1 className='text-success'>Plant life cyle</h1></center>
                <p>The life cycle of a tomato plant, scientifically known as Solanum lycopersicum, encompasses various stages, each crucial to its growth and reproduction. It begins with the germination of seeds, typically taking 5 to 10 days under optimal conditions. Once the seedling emerges, it enters the vegetative stage, marked by the growth of leaves, stems, and roots. During this phase, the plant focuses on establishing a strong root system and foliage to support future fruit production.</p>
                <p>As the tomato plant matures, it progresses to the reproductive phase, where flowers start to bloom. Tomatoes are self-pollinating, though they can also be pollinated by insects or the wind. The bright yellow flowers eventually give way to tiny green fruits, signaling the onset of fruit development. The growing fruit undergoes several growth stages, gradually changing color and size, and finally ripens into the familiar red or other colored tomato.</p>
                <p>Throughout its life cycle, the tomato plant requires appropriate care, including adequate sunlight, water, nutrients, and proper pruning to ensure optimal growth. Depending on the variety, environmental conditions, and cultivation methods, the entire life cycle of a tomato plant—from seed germination to mature fruit—typically spans around 2 to 3 months. However, this timeline can vary based on factors such as temperature, soil quality, and specific cultivars.</p>
                <p>Understanding the life cycle of a tomato plant is essential for farmers, gardeners, and enthusiasts, as it guides them in providing the necessary care at each stage, optimizing yield and ensuring a successful harvest. Additionally, studying the life cycle of plants like tomatoes contributes to our broader knowledge of agricultural practices, genetic diversity, and the intricate mechanisms underlying plant growth and development.</p>
            </div>
            <div>
                <center><h2 className='text-danger'>diseases can attack</h2></center>
                <img className='diseaseImage' src={Alternaria_solani}></img>
                <p>Alternaria solani: <br></br>Identified by dark brown lesions on lower leaves that spread upward, causing leaf yellowing and premature death. This fungal disease can lead to reduced fruit production.</p>
                <img className='diseaseImage' src={LateBlight}></img>
                <p>Late Blight : <br/>Known for its rapid spread in wet, cool conditions, causing dark, water-soaked spots on leaves, stems, and fruits. It can devastate entire crops if left unchecked.</p>
                <img className='diseaseImage' src={SeptoriaLeafSpot}></img>
                <p>Septoria Leaf Spot :<br/> Characterized by small, circular spots with dark edges on lower leaves, eventually causing leaf yellowing and defoliation, reducing plant vigor and fruit yield.</p>
            </div>
        </div>
    </div>
  )
}

export default Tomato