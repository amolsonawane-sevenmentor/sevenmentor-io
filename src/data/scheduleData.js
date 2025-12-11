export const scheduleData = {
  title: 'Batch Schedule',
  subtitle: 'Choose a batch that fits your schedule',
  upcomingBatches: [
    {
      id: 1,
      batchId: 'DS-2025-01',
      startDate: '15/01/2025',
      mode: 'Online',
      timing: 'Weekday Batch (Mon-Fri)',
      schedule: 'Mumbai',
      seats: 'Available',
      status: 'open'
    },
    {
      id: 2,
      batchId: 'DS-2025-02',
      startDate: '20/01/2025',
      mode: 'Online',
      timing: 'Regular Batch (Mon-Sat)',
      schedule: 'Mumbai',
      seats: 'Available',
      status: 'open'
    },
    {
      id: 3,
      batchId: 'DS-2025-03',
      startDate: '22/01/2025',
      mode: 'Online',
      timing: 'Weekend Batch (Sat-Sun)',
      schedule: 'Mumbai',
      seats: 'Filling Fast',
      status: 'filling'
    },
    {
      id: 4,
      batchId: 'DS-2025-04',
      startDate: '01/02/2025',
      mode: 'Offline',
      timing: 'Fast Track (Mon-Fri)',
      schedule: 'Mumbai',
      seats: 'Available',
      status: 'open'
    },
    {
      id: 5,
      batchId: 'DS-2025-05',
      startDate: '05/02/2025',
      mode: 'Online',
      timing: 'Weekend Batch (Sat-Sun)',
      schedule: 'Mumbai',
      seats: 'Available',
      status: 'open'
    },
    {
      id: 6,
      batchId: 'DS-2025-06',
      startDate: '10/02/2025',
      mode: 'Hybrid',
      timing: 'Regular Batch (Mon-Sat)',
      schedule: 'Mumbai',
      seats: 'Few Left',
      status: 'filling'
    }
  ],
  batchTypes: [
    {
      type: 'Weekday',
      icon: 'Briefcase',
      description: 'Monday to Friday',
      timing: '6:00 PM - 8:00 PM'
    },
    {
      type: 'Weekend',
      icon: 'Calendar',
      description: 'Saturday & Sunday',
      timing: '10:00 AM - 5:00 PM'
    },
    {
      type: 'Fast Track',
      icon: 'Zap',
      description: 'Monday to Friday',
      timing: '9:00 AM - 5:00 PM'
    }
  ],
  note: 'Batch timings can be customized based on student requirements. Contact us for more details.'
};
