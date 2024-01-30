import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt
				className='Logo ml2 br3 shadow-2'
				style={{
					height: '150px',
					width: '150px',
					tiltReverse: true,
                    gyroscope: true,
                    tiltMaxAngleX: 90,
                    tiltMaxAngleY: 90,
				}}
            >
                <div className='pa3'>
                    <img src={brain} alt='logo' />
                </div>
            </Tilt>
		</div>
	);
};

export default Logo;
