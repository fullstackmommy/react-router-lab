import React from 'react'

function TacoDetail() {
    return (
        <div>
            detailed page for taco with param {props.match.params.id}
        </div>
    )
}

export default TacoDetail
