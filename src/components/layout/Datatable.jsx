import React, { useState } from 'react'
import DataTable from 'react-data-table-component';


function Datatable() {

    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Email', selector: row => row.email, sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
    ];

    const sdata = [
        { id: '1', name: 'Ali', email: 'Ali123gmail.com', city:'Mansehra'},
        { id: '2', name: 'Salman', email: 'Salman123gmail.com', city:'Abbottabad'},
        { id: '3', name: 'Hadi', email: 'Hadi123gmail.com', city:'Islamabad'},
        { id: '4', name: 'Rizwan', email: 'Rizwan123gmail.com', city:'Karachi'},
        { id: '5', name: 'Ali', email: 'Ali123gmail.com', city:'Mansehra'},
        { id: '6', name: 'Salman', email: 'Salman123gmail.com', city:'Abbottabad'},
        { id: '7', name: 'Hadi', email: 'Hadi123gmail.com', city:'Islamabad'},
        { id: '8', name: 'Rizwan', email: 'Rizwan123gmail.com', city:'Karachi'},
        { id: '9', name: 'Ali', email: 'Ali123gmail.com', city:'Mansehra'},
        { id: '10', name: 'Salman', email: 'Salman123gmail.com', city:'Abbottabad'},
        { id: '11', name: 'Hadi', email: 'Hadi123gmail.com', city:'Islamabad'},
        { id: '12', name: 'Rizwan', email: 'Rizwan123gmail.com', city:'Karachi'},
        { id: '13', name: 'Ali', email: 'Ali123gmail.com', city:'Mansehra'},
        { id: '14', name: 'Salman', email: 'Salman123gmail.com', city:'Abbottabad'},
        { id: '15', name: 'Hadi', email: 'Hadi123gmail.com', city:'Islamabad'},
        { id: '16', name: 'Rizwan', email: 'Rizwan123gmail.com', city:'Karachi'},
    ];

    const [records, setRecords] = useState(sdata);

    function handleFilter(event){
        const newData = sdata.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }

    return (  
        <div className="p-5 px-5">
            <h1 className="chart-heading p-5 text-4xl text-red-500">Data Table</h1>
            <div className="text-end"><input className="p-2" type="text" onChange={handleFilter} placeholder='Search...'/></div>
            <DataTable columns={columns} data={records} selectableRows fixedHeader pagination>
                
            </DataTable>
        </div>
    );
}
 
export default Datatable;