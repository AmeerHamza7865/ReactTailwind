// src/pages/NotFound.jsx

import React, { useEffect, useRef } from 'react';
import { DataTable } from 'simple-datatables';
import 'simple-datatables/dist/style.css';


const Product = () => {


    const tableRef = useRef(null);

    useEffect(() => {
      if (tableRef.current) {
        new DataTable(tableRef.current, {
          searchable: true,
          sortable: true,
        });
      }
    }, []);
  
    return (

      <div className='container mx-auto px-4 py-8'>

      <table id="search-table" ref={tableRef}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Ticker</th>
            <th>Stock Price</th>
            <th>Market Capitalization</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Apple Inc.</td><td>AAPL</td><td>$192.58</td><td>$3.04T</td></tr>
          <tr><td>Microsoft Corporation</td><td>MSFT</td><td>$340.54</td><td>$2.56T</td></tr>
          <tr><td>Alphabet Inc.</td><td>GOOGL</td><td>$134.12</td><td>$1.72T</td></tr>
          <tr><td>Amazon.com Inc.</td><td>AMZN</td><td>$138.01</td><td>$1.42T</td></tr>
          <tr><td>NVIDIA Corporation</td><td>NVDA</td><td>$466.19</td><td>$1.16T</td></tr>
          <tr><td>Tesla Inc.</td><td>TSLA</td><td>$255.98</td><td>$811.00B</td></tr>
          <tr><td>Meta Platforms Inc.</td><td>META</td><td>$311.71</td><td>$816.00B</td></tr>
          <tr><td>Berkshire Hathaway Inc.</td><td>BRK.B</td><td>$354.08</td><td>$783.00B</td></tr>
          {/* Add more rows as needed... */}
        </tbody>
      </table>


      </div>
    );
  };
  
  export default Product;