import React from 'react';

export default function Home(props) {
    console.log(props);
    return <div>You are on your information pages {props.location.location.pathname}</div>
}
