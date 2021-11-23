import React from 'react';
import {Spin} from 'antd';
function Spinner(){
    return (
        <div>
            <Spin size="large" className="spinner"style={{color: "rgb(181,77,241)"}}/>
        </div>
    )
}
export default Spinner