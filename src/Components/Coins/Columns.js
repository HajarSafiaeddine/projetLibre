export const Columns = [
    {
      Header: 'Name',
     
      accessor: 'id',
    
    },
    {
      Header: 'Symbol',
     
      accessor: 'symbol',
      
    },
    {
        Header: 'Price in $ ',
       
        accessor: 'current_price',
        
    },
    {
      Header: 'Evolution in 24h',
     
      accessor: 'price_change_percentage_24h',
      
    },
    {
      Header: 'Volume',
      
      accessor: 'total_volume',
     
    },
    {
      Header: 'Market Cap',

      accessor: 'market_cap'
    },
    {
      Header: 'statut',
    accessor: 'statut',
   
    disableFilters: true,
   
    }  
  ]
  export const GROUPED_COLUMNS = [
    
    {
      Header: 'General informations',
      columns: [
        {
          Header: 'Logo',
         
          accessor: 'image',
          Cell: tableProps => (
            <img
              src={tableProps.row.original.image}
              width={35}
              alt='logo'
            />
          )
          
        },
        {
          Header: 'Name',
         
          accessor: 'id',
        
        },
        {
          Header: 'Symbol',
         
          accessor: 'symbol',
          
        },
        {
            Header: 'Price in $',
           
            accessor: 'current_price',
            
        }
      ]
    },
    {
      Header: 'Financial informations',
      columns: [
        {
          Header: 'Evolution in a year',
         
          accessor: 'price_change_percentage_24h',
          
        },
        {
          Header: 'Volume in $',
          
          accessor: 'total_volume',
         
        },
        {
          Header: 'Market Cap in $',
    
          accessor: 'market_cap'
        },
      ]
    }
  ]
  