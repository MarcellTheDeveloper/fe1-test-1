import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
const HomePage = () => {
  return (
    <div className='mainContainer'>
      <div className='nav'>
        <div className='navLeft'>MEDIA APPEARANCES</div>
        <div className='navRight'>
          <MenuIcon className='navIcon' />
        </div>
      </div>
      <div className='mainSections'>
        <div className='section1 section'>
          <div className='section1main'>
            <div>
              <h4>Science</h4>
            </div>
            <div>
              <h4>Magazine</h4>
            </div>
            <div>
              <h4>11.12.2018</h4>
            </div>
            <div className='section1text'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. As opposed to
              using 'Content here, content here' English.
            </div>
          </div>
          <a href='#' className='linkUnderCards'>
            READ MORE
          </a>
        </div>
        <div className='section2 section'>
          <div className='section2main'>
            <div>
              <h4>Nature</h4>
            </div>

            <div>
              <h4>11.12.2018</h4>
            </div>
            <div className='section2text'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.As opposed to
              using 'Content here, content here' English.
            </div>
          </div>
          <a href='#' className='linkUnderCards'>
            READ MORE
          </a>
        </div>
        <div className='section3 section'>
          <div className='section3main'>
            <div className='playIconContainer'>
              <PlayCircleOutlineIcon className='playIcon' />
            </div>
            <div className='tileBottomTextContainer'>
              <h4>Lecture at NYU</h4>
            </div>
          </div>
          <a href='#' className='linkUnderCards'>
            WATCH
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
