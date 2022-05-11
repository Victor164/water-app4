import React from 'react';
import Weather from '../../weather/Weather';
import './Table.css';

function Table () {
    return (<div className='grid-container'>

            <div className='item1'>
            {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKQBhV1OdC6lDLEDisaIRgjUs2Aeb2zDBRnmBGx_6KPH3a5Bf7b5KehLDO7hTJbUXju2uvy57hDuH4/pubhtml?widget=true&amp;headers=false"width="100%" height="849px"></iframe> */}
            </div>
            <div className="item2" >
             <Weather />
             </div>
             <div className="item3" >
             <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKQBhV1OdC6lDLEDisaIRgjUs2Aeb2zDBRnmBGx_6KPH3a5Bf7b5KehLDO7hTJbUXju2uvy57hDuH4/pubhtml?widget=true&amp;headers=false"width="280%" height="849px"></iframe>
             </div>
   </div>
    )
    }

    export default Table;
