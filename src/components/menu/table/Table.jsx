import React from 'react';
import Weather from '../../weather/Weather';
import './Table.css';

function Table () {
    return (<div className='grid-container'>
              
            <div className='item1'>
            </div>
            <div className="item2" >
            <a target="_blank" href="https://nochi.com/weather/minsk-17469">
                <img src="https://w.bookcdn.com/weather/picture/4_17469_1_20_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=2&domid=589&anc_id=38816"  alt="booked.net"/>
                </a>
                 {/* <a target="_blank" href="https://nochi.com/weather/minsk-17469"><img src="https://w.bookcdn.com/weather/picture/7_17469_1_20_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=2&domid=589&anc_id=38816"  alt="booked.net"/></a> */}
             {/* <Weather /> */}
             </div>
             <div className="item3" >
             <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKQBhV1OdC6lDLEDisaIRgjUs2Aeb2zDBRnmBGx_6KPH3a5Bf7b5KehLDO7hTJbUXju2uvy57hDuH4/pubhtml?widget=true&amp;headers=false"width="280%" height="849px"></iframe>
             </div>
   </div>
    )
    }

    export default Table;
