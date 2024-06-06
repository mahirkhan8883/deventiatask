import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

function Datatable() {
  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'City', selector: row => row.city, sortable: true },
  ];

  const sdata = [
    { id: '1', name: 'Ali', email: 'Ali123@gmail.com', city: 'Mansehra' },
    { id: '2', name: 'Salman', email: 'Salman123@gmail.com', city: 'Abbottabad' },
    { id: '3', name: 'Hadi', email: 'Hadi123@gmail.com', city: 'Islamabad' },
    { id: '4', name: 'Rizwan', email: 'Rizwan123@gmail.com', city: 'Karachi' },
    { id: '5', name: 'Ali', email: 'Ali123@gmail.com', city: 'Mansehra' },
    { id: '6', name: 'Salman', email: 'Salman123@gmail.com', city: 'Abbottabad' },
    { id: '7', name: 'Hadi', email: 'Hadi123@gmail.com', city: 'Islamabad' },
    { id: '8', name: 'Rizwan', email: 'Rizwan123@gmail.com', city: 'Karachi' },
    { id: '9', name: 'Ali', email: 'Ali123@gmail.com', city: 'Mansehra' },
    { id: '10', name: 'Salman', email: 'Salman123@gmail.com', city: 'Abbottabad' },
    { id: '11', name: 'Hadi', email: 'Hadi123@gmail.com', city: 'Islamabad' },
    { id: '12', name: 'Rizwan', email: 'Rizwan123@gmail.com', city: 'Karachi' },
    { id: '13', name: 'Ali', email: 'Ali123@gmail.com', city: 'Mansehra' },
    { id: '14', name: 'Salman', email: 'Salman123@gmail.com', city: 'Abbottabad' },
    { id: '15', name: 'Hadi', email: 'Hadi123@gmail.com', city: 'Islamabad' },
    { id: '16', name: 'Rizwan', email: 'Rizwan123@gmail.com', city: 'Karachi' },
  ];

  const [records, setRecords] = useState(sdata);

  const handleFilter = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredData = sdata.filter(row => {
      return (
        row.id.toLowerCase().includes(searchText) ||
        row.name.toLowerCase().includes(searchText) ||
        row.email.toLowerCase().includes(searchText) ||
        row.city.toLowerCase().includes(searchText)
      );
    });
    setRecords(filteredData);
  };

  return (
    <div className="p-5">
      <h1 className="chart-heading p-5 text-4xl text-red-500">Data Table</h1>
      <div className="text-end mb-4">
        <input
          className="p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          type="text"
          onChange={handleFilter}
          placeholder="Search..."
        />
      </div>
      <div className="overflow-y-auto">
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
        />
      </div>
    </div>
  );
}

export default Datatable;
