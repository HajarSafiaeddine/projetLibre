import React, { useMemo,useState } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import mydata from '../../constants/file.json'
import { GROUPED_COLUMNS } from './Columns'
import './table.css'
import './CoinTable.css'
import { useNavigate } from "react-router-dom";
import CoinItem from './CoinItem'



const CoinTable = () => {
  let navigate = useNavigate();
  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => mydata, [])
  // Define state
  const [cellValue, setCellValue] = useState('');
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    canPreviousPage,
    canNextPage,
    page,
    nextPage,
    previousPage,
    prepareRow
  } = useTable({
    columns,
    data,
  },
  useSortBy,
  usePagination
  )
   // Function to get cell value
   const getCellValue = (cell) =>{
    setCellValue(cell.value);
    navigate(`/coin/${cell.row.original.id}`);
  };

  
  return (
    <>
     
      <table {...getTableProps()}>
      <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? 'sorting up'
                        : 'sorting down'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return  <td
                  onClick={()=> getCellValue(cell)}
                    {...cell.getCellProps()}
                  >{cell.render('Cell')}</td>
                }
                )}
                 
              </tr>
            )
          })}
        </tbody>
        
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
      </div>
     
    </>
  )
}
export default CoinTable
