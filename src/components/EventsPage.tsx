import React from 'react';

const EventsPage: React.FC = () => {
  return (
    <div className="events-page">
      <h1 className="text-2xl font-bold">Upcoming Events</h1>
      <ul className="event-list">
        <li className="event-item">
          <h2 className="text-xl font-semibold">Affiliate World Asia</h2>
          <p>Date: June 2025</p>
          <p>Location: Bangkok, Thailand</p>
          <a href="https://affiliateworldconferences.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Learn More
          </a>
        </li>
        <li className="event-item">
          <h2 className="text-xl font-semibold">Affiliate Summit Vegas</h2>
          <p>Date: February 3 - 5, 2025</p>
          <p>Location: Caesars Forum, Las Vegas, NV</p>
          <a href="https://www.affiliatesummit.com/west" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Learn More
          </a>
        </li>
      </ul>
    </div>
  );
};

export default EventsPage;
