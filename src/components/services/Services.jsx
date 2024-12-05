import ComputerModelContainer from './computer/ComputerModelContainer';
import ConsoleModelContainer from './console/ConsoleModelContainer';
import MugModelContainer from './mug/MugModelContainer';
import './Services.css';

const Services = () => {
  return (
    <div className='services'>
      <div className='sSection left'>left</div>
      <div className='sSection right'>
        <ComputerModelContainer />
        <ConsoleModelContainer />
        <MugModelContainer />
      </div>
    </div>
  );
};

export default Services;
