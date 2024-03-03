import React from 'react';
import './circular.css';
import drive from './google-drive.png'

const Circular = () => {
  return (
    <div className='bosyy'>

      <div className="rounded-text rotating">
        
        <svg viewBox="0 0 200 200">
          <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" strokeWidth="0"></path>
          <g fontSize="13.1px">
            <text textAnchor="start">
              <textPath className="coloring" xlinkHref="#textPath" startOffset="0%">- Ekam innocations - Ekam innocations- Ekam innocations - Ekam innocations</textPath>
            </text>
            
          </g>
          
        </svg>
     
      </div>
    </div>
  );
}

export default Circular;
