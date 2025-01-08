import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Graph: React.FC = () => {
    const salesData = useSelector((state: RootState) => state.data.products[0]?.sales || []);

    // Custom X-axis Tick Formatter for Month Names
    const formatMonth = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString('default', { month: 'short' }); // e.g., "Jan", "Feb"
    };

    // Filter data to one point per month for a clean X-axis display
    const filteredSalesData = salesData.filter((item, index, array) => {
        const currentMonth = new Date(item.weekEnding).getMonth();
        const previousMonth = index > 0 ? new Date(array[index - 1].weekEnding).getMonth() : null;
        return currentMonth !== previousMonth; // Include only the first data point of each month
    });

    return (
        <div>
            <h2 style={{ textAlign: 'left', marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>Retail Sales</h2>
            <LineChart width={900} height={400} data={filteredSalesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} /> {/* Clean grid with horizontal lines only */}
                <XAxis dataKey="weekEnding" tickFormatter={formatMonth} tick={{ fontSize: 14 }} />
                <YAxis tick={{ fontSize: 14 }} />
                <Tooltip />
                <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="wholesaleSales" stroke="#a9b8c8" strokeWidth={2} dot={false} />
            </LineChart>
        </div>
    );
};

export default Graph;
