import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../App.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Schedule = () => {
  const localizer = momentLocalizer(moment)
    const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(),
    },
    {
      title: 'Conference',
      start: new Date(new Date().setDate(new Date().getDate() + 1)),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  ]);
  return (
    <div
      className="w-inherit bg-transparent flex items-center justify-center"
      style={{ height: "calc(100vh - 56px)",width:'full' }}
    >
      <div className='w-full h-full border-b-gray-800'>
        <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
      />
      </div>
            
    </div>
  );
};
export default Schedule;