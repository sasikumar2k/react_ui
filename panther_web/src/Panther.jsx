import React, { useEffect, useState } from 'react'
import logo from '../src/assets/logo.png'
import panther from '../src/assets/panther.png'
import thunder from '../src/assets/thunders.png'
export default function Panther() {
    const [toggle, setToogle] = useState(true)
    const handleToogle = () => {
        setToogle(prev => !prev)
    }

    return (
        <div className='parent-div'>
            {toggle ? <div className='sider-div'>
                <div className='sider-child-div1'>
                    <div><img src={logo} alt=""
                        onClick={handleToogle}
                        height={70} /></div>
                    <div className='text-div'>Support</div>
                    <div className='text-div'>Join Us</div>
                    <div className='text-div'>Create</div>
                    <div className='text-div text-div-home'>Home</div>
                </div>
                <div className='sider-child-div2'>
                    <div>Eng</div>
                    <div>Guj</div>
                    <div className='text-div-home1'>Hin</div>
                </div>
            </div> : <div><img src={logo} alt=""
                onClick={handleToogle}
                height={70} /></div>}

            <div className='content-div'>
                <div className='content1'>
                    <img src={thunder} className='thunder' alt="" width={300} />
                    <div className='credits_div'>
                        <p className='credits'>Designer</p>
                        <p>Designer Sk from Covai</p>
                        <p className='credits'>Agency</p>
                        <p>Sk Research and development</p>
                    </div>

                </div>
                <div className='pic_div'>
                    <div className='button-div'>
                        <div className='signin'><h3>Sign in</h3></div>
                        <div className='login'><h3>log in</h3></div>
                    </div>
                    <div><img src={panther} className='panther_image' alt="" /></div>
                </div>
                <div className='content-3'>
                    <div className='sample'>
                        <div><img className='logo' src={logo} alt="" height={60} /></div>
                        <p className='we_are_text'>We Are</p>
                        <p className='limit_text' >Limit</p>
                        <p className='less_text' >Less</p>
                    </div>
                    <div className='lorem_div'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa, maxime tenetur exercitationem esse repudiandae,</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
