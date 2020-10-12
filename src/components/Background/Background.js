import React from 'react';
import './Background.css'


const Background = () => {
  const body = document.querySelector('body')
  return (
    <div>
    <script src="three.r119.min.js"></script>
    <script src="vanta.fog.min.js"></script>
    <script>
    VANTA.FOG({
      el: { body },
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      speed: 1.50
    })
    </script>
    </div>
  );
}

export default Background