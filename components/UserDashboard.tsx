import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const salesReportData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [3000, 4000, 2000, 5000, 7000, 6000],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const salesReportOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Sales Report',
    },
  },
};

const userDistribution = [
  { group: 'Group A', users: 50 },
  { group: 'Group B', users: 100 },
  { group: 'Group C', users: 150 },
  { group: 'Group D', users: 200 },
];

const UserDashboard: React.FC<{ username: string }> = ({ username }) => (
  <div className='p-6 mx-auto bg-white rounded-lg shadow-md space-y-4 border'>
    <div className='flex justify-between items-center'>
      <div>
        <h2 className='text-xl font-bold'>User Dashboard</h2>
        <p>
          Welcome, <span className='text-gray-700'>{username}</span>
        </p>
      </div>
      <div>
        <input
          type='text'
          placeholder='Search...'
          className='border rounded px-3 py-1'
        />
      </div>
    </div>

    {/* Admin-specific content here */}

    <div className='flex flex-row gap-8'>
      <div className='w-3/4 bg-white rounded-lg shadow-sm p-4 border'>
        <h3 className='text-lg font-semibold'>Sales Report</h3>
        <div className='bg-gray-100 p-4 rounded-md'>
          {/* Sales report chart or graph */}
          <Line data={salesReportData} options={salesReportOptions} />
        </div>
      </div>

      <div className='w-1/4 bg-white rounded-lg shadow-sm p-4 border'>
        <h1 className='font-bold'>Notifications</h1>
        <div className='space-y-4 mt-4'>
          <div className='border-l-4 p-4 bg-gray-100 border-gray-300 text-gray-800 flex justify-between items-center'>
            <div>
              <h3 className='font-bold'>Success!</h3>
              <p>Your action was successful.</p>
            </div>
            <button className='text-xl font-bold text-gray-600'>&times;</button>
          </div>

          <div className='border-l-4 p-4 bg-gray-100 border-gray-300 text-gray-800 flex justify-between items-center'>
            <div>
              <h3 className='font-bold'>Error!</h3>
              <p>There was an error processing your request.</p>
            </div>
            <button className='text-xl font-bold text-gray-600'>&times;</button>
          </div>

          <div className='border-l-4 p-4 bg-gray-100 border-gray-300 text-gray-800 flex justify-between items-center'>
            <div>
              <h3 className='font-bold'>Info</h3>
              <p>Here is some important information.</p>
            </div>
            <button className='text-xl font-bold text-gray-600'>&times;</button>
          </div>

          <div className='border-l-4 p-4 bg-gray-100 border-gray-300 text-gray-800 flex justify-between items-center'>
            <div>
              <h3 className='font-bold'>Warning</h3>
              <p>Be cautious with the next steps.</p>
            </div>
            <button className='text-xl font-bold text-gray-600'>&times;</button>
          </div>
        </div>
      </div>
    </div>

    <div className='bg-white rounded-lg shadow-sm p-4 border'>
      <h3 className='text-lg font-semibold'>User Distribution Table</h3>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Group</th>
            <th className='px-4 py-2'>Users</th>
          </tr>
        </thead>
        <tbody>
          {userDistribution.map(group => (
            <tr key={group.group}>
              <td className='border px-4 py-2'>{group.group}</td>
              <td className='border px-4 py-2'>{group.users}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div>
      <div className='flex flex-wrap justify-between bg-gray-100 gap-6 p-6'>
        {/* Card 1 */}
        <div className='w-1/4 h-64 p-4 flex flex-col items-start justify-between text-gray-800 bg-blue-300 rounded-lg shadow-md'>
          <div className='text-xl font-semibold'>Card 1</div>
          <div className='mt-4 text-base'>
            <div className='font-bold'>Price:</div>
            <div>$1,200</div>
          </div>
          <div className='mt-2 text-base'>
            <div className='font-bold'>Growth:</div>
            <div>+8%</div>
          </div>
          <div className='mt-2 text-base'>
            <div className='font-bold'>Sales:</div>
            <div>320 units</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='w-1/4 h-64 p-4 flex flex-col items-start justify-between text-gray-800 bg-red-300 rounded-lg shadow-md'>
          <div className='text-xl font-semibold'>Card 2</div>
          <div className='mt-4 text-base'>
            <div className='font-bold'>Price:</div>
            <div>$900</div>
          </div>
          <div className='mt-2 text-base'>
            <div className='font-bold'>Growth:</div>
            <div>+5%</div>
          </div>
          <div className='mt-2 text-base'>
            <div className='font-bold'>Sales:</div>
            <div>150 units</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='w-1/4 h-64 p-4 flex flex-col items-start justify-between text-gray-800 bg-green-300 rounded-lg shadow-md'>
          <div className='text-xl font-semibold'>Card 3</div>
          <div className='mt-4 text-base'>
            <div className='font-bold'>Price:</div>
            <div>$1,500</div>
          </div>
          <div className='mt-2 text-base'>
            <div className='font-bold'>Growth:</div>
            <div>+12%</div>
          </div>
          <div className='mt-2 text-base'>
            <div className='font-bold'>Sales:</div>
            <div>450 units</div>
          </div>
        </div>
      </div>
    </div>

    <div className='bg-white rounded-lg shadow-sm p-4 border'>
      <h3 className='text-lg font-semibold'>Invoice</h3>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Group</th>
            <th className='px-4 py-2'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {userDistribution.map(group => (
            <tr key={group.group}>
              <td className='border px-4 py-2'>{group.group}</td>
              <td className='border px-4 py-2'>${group.users + 70}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UserDashboard;
