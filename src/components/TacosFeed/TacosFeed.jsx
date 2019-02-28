import React from 'react'

function TacosFeed({match}) {
    return (
        <div>
            <h1>This is your TacosFeed page</h1>
            <h2>{match.params.id}</h2>
        </div>
    )
}

export default TacosFeed
