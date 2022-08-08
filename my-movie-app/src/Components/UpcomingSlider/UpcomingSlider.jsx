import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../UpcomingSlider/UpcomingSlider.scss'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function UpcomingSlider() {
  return (
    <Swiper className="mySwiper">

      <SwiperSlide>
            <div className="movie_box">
                <img src="https://movflxx.netlify.app/img/poster/ucm_poster01.jpg" alt="" />
                <div className="movie_text">
                    <div className="movie_top_text">
                        <h3 className='movie_name'>Women's Day</h3>
                        <h3 className='year'>2022</h3>
                    </div>
                    <div className="movie_bottom_text">
                        <h4>HD</h4>
                        <div className='movie_details'>
                            <span> <AccessTimeIcon className='duration' /> 128 min</span>
                            <span> <ThumbUpAltIcon className='like' /> 3.5</span>
                        </div>
                    </div>
                </div>
            </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="movie_box">
                <img src="https://movflxx.netlify.app/img/poster/ucm_poster02.jpg" alt="" />
                <div className="movie_text">
                    <div className="movie_top_text">
                        <h3 className='movie_name'>Women's Day</h3>
                        <h3 className='year'>2022</h3>
                    </div>
                    <div className="movie_bottom_text">
                        <h4>HD</h4>
                        <div className='movie_details'>
                            <span> <AccessTimeIcon className='duration' /> 128 min</span>
                            <span> <ThumbUpAltIcon className='like' /> 3.5</span>
                        </div>
                    </div>
                </div>
            </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="movie_box">
                <img src="https://movflxx.netlify.app/img/poster/ucm_poster03.jpg" alt="" />
                <div className="movie_text">
                    <div className="movie_top_text">
                        <h3 className='movie_name'>Women's Day</h3>
                        <h3 className='year'>2022</h3>
                    </div>
                    <div className="movie_bottom_text">
                        <h4>HD</h4>
                        <div className='movie_details'>
                            <span> <AccessTimeIcon className='duration' /> 128 min</span>
                            <span> <ThumbUpAltIcon className='like' /> 3.5</span>
                        </div>
                    </div>
                </div>
            </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="movie_box">
                <img src="https://movflxx.netlify.app/img/poster/ucm_poster04.jpg" alt="" />
                <div className="movie_text">
                    <div className="movie_top_text">
                        <h3 className='movie_name'>Women's Day</h3>
                        <h3 className='year'>2022</h3>
                    </div>
                    <div className="movie_bottom_text">
                        <h4>HD</h4>
                        <div className='movie_details'>
                            <span> <AccessTimeIcon className='duration' /> 128 min</span>
                            <span> <ThumbUpAltIcon className='like' /> 3.5</span>
                        </div>
                    </div>
                </div>
            </div>
      </SwiperSlide>

    </Swiper>
  )
}

export default UpcomingSlider