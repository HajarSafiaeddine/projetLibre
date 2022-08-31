import React, { useMemo,useState } from 'react'
import { useTable, useSortBy, usePagination , useGlobalFilter } from 'react-table'
import mydata from '../../constants/file.json'
import { GROUPED_COLUMNS } from './Columns'
import './table.css'
import './CoinTable.css'
import { useNavigate } from "react-router-dom";






const CoinTable = () => {
  let navigate = useNavigate();
  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => mydata, [])


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
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable({
    columns,
    data,
  },
  useSortBy,
  usePagination
  )
 
  const { pageIndex, pageSize } = state

   const getCellValue = (cell) =>{
    setCellValue(cell.value);
    console.log(cell)
    navigate(`/coin/${cell.row.original.id}`);
  };

  
  return (
    <>
      
      <table  className='table'{...getTableProps()}>
      <thead>
     
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
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
                  > {cell.render('Cell')}</td>
                }
                )}
              </tr>
            )
          })}
        </tbody>
        
      </table>
      <div className='bottom'>
        <button className='btn2' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button className='btn' onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button className='btn' onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
        <button className='btn2' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span className='page'>
          Page{' '}
          <h6>
            {pageIndex + 1} / {pageOptions.length}
          </h6>{' '}
        </span>
        <select className='selec' style={{border:"none"}}
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 20, 30, 40 ,50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
               {pageSize} currencies
            </option>
          ))}
        </select>
      </div>
      
    </>
   
    
  )
}
export default CoinTable
