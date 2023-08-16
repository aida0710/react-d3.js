import React from 'react';
import NetworkGraph from "./networkGraph";

function App() {
    return (
        <div className="bg-amber-400 flex justify-center">
            <div className="bg-white rounded-lg shadow-2xl p-4 m-4">
                <h1 className="text-5xl">以下グラフ</h1>
                <NetworkGraph/>
            </div>
        </div>
    );
}

export default App;
