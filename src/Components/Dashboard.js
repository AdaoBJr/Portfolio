import React from 'react';
import Lottie from 'react-lottie';

import * as dashboardLottie from '../dashboard.json';

const dashboarAnimation = {
  loop: true,
  autoplay: true,
  animationData: dashboardLottie.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Dashboard() {
  return (
    <div className="homeDashboard">
      <Lottie
          options={ dashboarAnimation }
        />
    </div>
  )
}
