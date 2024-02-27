import React from 'react'

function Alert(props) {
    return(
        <>
        {
            props.alert &&
       
        <div style={{height:'60px'}}>
          <div className={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.type } : {props.alert.msg}
            </div>
            </div>
             }
        </>
    )
    
    
    
}

export default Alert
