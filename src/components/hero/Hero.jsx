import './Hero.css';
import Speech from './Speech';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hSection left'>
        <h1 className='hTitle'>
          Hey There, <br /> <span>I'm Serge!</span>
        </h1>
        <div className='awards'>
          <h2>FRONTEND DEVELOPER</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className='award-list'>
            <img src='/award1.png' alt='img pic' />
            <img src='/award2.png' alt='img pic' />
            <img src='/award3.png' alt='img pic' />
          </div>
        </div>
        <a href='#services' className='scroll'>
          <svg
            width='50px'
            height='50px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
              stroke='white'
              strokeWidth='1'
            />
            <path
              d='M12 5V8'
              stroke='white'
              strokeWidth='1'
              strokeLinecap='round'
            />
          </svg>
        </a>
      </div>
      <div className='hSection right'>
        <div className='follow'>
          <a href='/'>
            <img src='/instagram.png' alt='img pic' />
          </a>
          <a href='/'>
            <img src='/facebook.png' alt='img pic' />
          </a>
          <a href='/'>
            <img src='/youtube.png' alt='img pic' />
          </a>
          <div className='followTextContainer'>
            <div className='followText'>FOLLOW ME</div>
          </div>
        </div>
        <Speech />
        <div className='certificate'>
          <img src='/certificate.png' alt='img pic' />
          LMA CERTIFICED
          <br />
          PROFESSINAL
          <br />
          FRONTEND DEVELOPER
        </div>
        <a href='/#contact' className='contactLink'>
          <div className='contactButton'>
            <svg viewBox='0 0 200 200' width='150' height='150'>
              <circle cx='100' cy='100' r='90' fill='pink' />
              <path
                id='innerCirclePath'
                fill='none'
                d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
              />
              <text className='circleText'>
                <textPath href='#innerCirclePath'>Hire Now •</textPath>
              </text>
              <text className='circleText'>
                <textPath href='#innerCirclePath' startOffset='44%'>
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className='arrow'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='50'
                height='50'
                fill='none'
                stroke='black'
                strokeWidth='2'
              >
                <line x1='6' y1='18' x2='18' y2='6' />
                <polyline points='9 6 18 6 18 15' />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className='bg'>
        <div className='hImg'>
          <img src='/hero1.png' alt='img pic' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
