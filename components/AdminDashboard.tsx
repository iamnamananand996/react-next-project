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
  ArcElement,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
  labels: ['Category A', 'Category B', 'Category C'],
  datasets: [
    {
      label: 'Sales Distribution',
      data: [30, 40, 30], // Example data
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Disable the legend
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        },
      },
    },
  },
};

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
  datasets: {
    line: {
      tension: 0.4, // Adjust the tension value for desired smoothness
    },
  },
};

const AdminDashboard: React.FC<{ username: string }> = ({ username }) => (
  <div className='p-6 mx-auto bg-white rounded-xl shadow-md space-y-4 mt-6'>
    <h2 className='text-xl font-bold'>Admin Dashboard</h2>
    <p>
      Welcome, <span className='text-gray-700'>{username}</span>
    </p>
    {/* User-specific content here */}
    <div>
      <h3 className='text-lg font-semibold'>Sales</h3>
      <div className='bg-gray-100 p-4 rounded-md'>
        <div>
          <div className='flex flex-wrap justify-between bg-gray-100 gap-6 p-6'>
            {/* Card 1 */}
            <div className='w-1/4 h-64 p-4 flex flex-col items-center justify-between text-gray-800 bg-blue-300 rounded-lg shadow-md'>
              <div className='text-xl font-semibold'>Card 1</div>
              {/* Pie chart */}
              <div className='mt-4 h-[150px] '>
                <Pie data={pieData} options={pieOptions} />
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
      </div>
    </div>

    <div className='bg-white rounded-lg shadow-sm p-4 border'>
      <h3 className='text-lg font-semibold'>Sales Report</h3>
      <div className='bg-gray-100 p-4 rounded-md'>
        {/* Sales report chart or graph */}
        <Line data={salesReportData} options={salesReportOptions} />
      </div>
    </div>
    <div className='bg-white rounded-lg shadow-sm p-4 border'>
      <h3 className='text-lg font-semibold'>Recently Paid Invoices</h3>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Invoice ID</th>
            <th className='px-4 py-2'>Time</th>
            <th className='px-4 py-2'>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-4 py-2'>ABC123</td>
            <td className='border px-4 py-2'>18:44</td>
            <td className='border px-4 py-2'>$15,232</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>GDU639</td>
            <td className='border px-4 py-2'>16:32</td>
            <td className='border px-4 py-2'>$23,545</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>PQR456</td>
            <td className='border px-4 py-2'>15:31</td>
            <td className='border px-4 py-2'>$40,123</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminDashboard;
