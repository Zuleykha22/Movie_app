import React from 'react'
import '../Services/Services.scss'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideocamIcon from '@mui/icons-material/Videocam';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';

function Services() {
    return (
        <div>
            <div className="services">
                <div className="services_container">
                    <div className="services_img">
                        <img src="https://movflxx.netlify.app/img/images/services_img.jpg" alt="" />
                    </div>
                    <div className="download">
                        <span>
                           DOWNLOAD <SecurityUpdateIcon className='download_icon' /> 
                        </span>
                        
                    </div>
                    <div className="services_text">
                        <h6>OUR SERVICES</h6>
                        <h1>Download Your Shows Watch Offline.</h1>
                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                        <div className="watch_box">
                            <div className="tv">
                                <LiveTvIcon />
                            </div>
                            <div className="tv_text">
                                <h3>Enjoy on Your TV.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, unde non.</p>
                            </div>
                        </div>
                        <div className="watch_box">
                            <div className="camera">
                                <VideocamIcon />
                            </div>
                            <div className="camera_text">
                                <h3>Watch Everywhere.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, unde non.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services