import React, { useState } from 'react';
import '../styles/Table.css'; 

interface TableProps {
    salesData: Array<{
        weekEnding: string;
        retailSales: number;
        wholesaleSales: number;
        unitsSold: number;
        retailerMargin: number;
    }>;
}

const Table: React.FC<TableProps> = ({ salesData }) => {
    const [sortConfig, setSortConfig] = useState<{ key: keyof typeof salesData[0]; direction: 'asc' | 'desc' } | null>(null);

    // Function to sort data
    const sortedData = [...salesData].sort((a, b) => {
        if (sortConfig) {
            const { key, direction } = sortConfig;
            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        }
        return 0;
    });

    // Handle sorting when a header is clicked
    const handleSort = (key: keyof typeof salesData[0]) => {
        setSortConfig((prevState) => {
            if (prevState?.key === key && prevState.direction === 'asc') {
                return { key, direction: 'desc' };
            }
            return { key, direction: 'asc' };
        });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => handleSort('weekEnding')}>Week Ending</th>
                    <th onClick={() => handleSort('retailSales')}>Retail Sales</th>
                    <th onClick={() => handleSort('wholesaleSales')}>Wholesale Sales</th>
                    <th onClick={() => handleSort('unitsSold')}>Units Sold</th>
                    <th onClick={() => handleSort('retailerMargin')}>Retailer Margin</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.weekEnding}</td>
                        <td>{data.retailSales}</td>
                        <td>{data.wholesaleSales}</td>
                        <td>{data.unitsSold}</td>
                        <td>{data.retailerMargin}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
