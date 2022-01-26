import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import './Movies.scss';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { FreeMode, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
// import 'swiper/swiper/css/free-mode';

const Movies = ({ movies, title }) => {
  SwiperCore.use([FreeMode, Navigation]);
  const [count, setCounter] = useState(0);
  // const windowWidth = window.innerWidth;
  // console.log(count);
  // console.log(movies.length);
  // console.log(windowWidth);
  const next = () => {
    if (count >= 57) {
      return;
    }
    setCounter(count + 4);
  };
  const prev = () => {
    if (count <= 0) {
      return;
    }
    setCounter(count - 4);
  };
  return (
    <section>
      <h1>{title}</h1>
      <div className='movies-container'>
        {/* <div className='buttons'>
          <button className='btn btn-prev' onClick={() => prev()}>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button className='btn btn-next' onClick={() => next()}>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div> */}
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
              spaceBetween: 60,
            },
            576: {
              width: 576,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              width: 992,
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1800: {
              width: 1800,
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          freeMode={true}
        >
          <div
            className='movies-box'
            style={{
              transform: `translateX(-${count * (100 / movies.length)}%`,
            }}
          >
            {movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <MovieItem movie={movie} />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
Movies.defaultProps = {
  title: 'Some movies ...',
};
Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movies;
