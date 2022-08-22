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
        Header: 'Price',
       
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
    Cell: ({ value }) => {
      const displayStatut =
        value == 'Enregistré'
          ? 'orange'
          : value == 'Transmis'
          ? 'green'
          : value == 'Traité'
          ? 'green'
          : 'red';
        return  <span className={displayStatut}>{value}</span>
    }
    }  
  ]
  export const GROUPED_COLUMNS = [
    
    {
      Header: 'General informations',
      columns: [
        {
          Header: 'Name',
         
          accessor: 'id',
        
        },
        {
          Header: 'Symbol',
         
          accessor: 'symbol',
          
        },
        {
            Header: 'Price',
           
            accessor: 'current_price',
            
        }
      ]
    },
    {
      Header: 'Financial informations',
      columns: [
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
      ]
    }
  ]
  