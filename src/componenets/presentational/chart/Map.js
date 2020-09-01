import React from 'react'
import { VectorMap } from 'react-jvectormap'

export default function Map({ ...props }) {

    return (
        <div style={{ width: "90%", height: 500 }}>
            <VectorMap
                {...props}
                map={'ir_mill'}

                containerStyle={{
                    width: '100%',
                    height: '100%'
                }}
            />
        </div>
    )
}

Map.defaultProps = {
    gdpData: []
}

