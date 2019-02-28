import React from 'react';
import queryString from 'query-string';

function TwitterFeed({data, location}) {
    const parsed = queryString.parse(location.search);

    console.log(parsed);
    return (
        <div>
            <h1>This is your TwitterFeed page</h1>
            <h2>{data}</h2>
        </div>
    )
}

export default TwitterFeed