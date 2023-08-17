import React from 'react';
import NetworkGraph from "./NetworkGraph";

const App = () => {
    return (
        <div className="relative py-16">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">アカウントにログイン</h1>
            <NetworkGraph/>
        </div>
    )
}

export default App;
