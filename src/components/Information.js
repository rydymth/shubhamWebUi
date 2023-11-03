import React from 'react'
import './Information.css'
import identify from '../assets/identify.png';
import medicine from '../assets/medicine.png';
import ai from '../assets/ai.png';


const Information = () => {
    return (
        <div class='containerr'>
            <div className='part1'>
                <div className='title'>
                    <div><img src={identify} className='imagee' /></div>
                    <div className='titlee'>Identify Plants in Seconds</div>
                </div>

                <div className='info'>
                    <p>Utilize the innovative feature of capturing plant images, uploading them to our platform, 
                        and witnessing the magic unfold as our cutting-edge scanning technology accurately identifies the plant's name,
                         providing you with quick and convenient plant recognition.
                    </p>
                </div>
            </div>

            <div className='part2'>
                <div className='title'>
                    <div><img src={medicine} className='imagee' /></div>
                    <div className='titlee'>Power of Machine Learning</div>
                </div>

                <div className='info'>
                    <p>We use cutting-edge methods of
                        machine learning (aka artificial intelligence)
                        and train custom deep convolutional neural networks
                        to ensure the best possible results. We estimate that we
                        get the plant name right 90% of the time. Check out our blog
                        for more details.
                    </p>
                </div>

            </div>

            <div className='part3'>
                <div className='title'>
                    <div><img src={ai} className='imagee' /></div>
                    <div className='titlee'>Information in 3 Different Language</div>
                </div>

                <div className='info'>
                    <p>"The medicinal usage, description, and instructions on how to use this plant can be found in the following languages:
                         In English, you can learn about the therapeutic benefits, physical characteristics, and proper application of this plant
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Information