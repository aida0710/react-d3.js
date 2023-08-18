import React from 'react';
import NetworkGraph from "./NetworkGraph";

const App = () => {
    return (
        <div className={'bg-red-500'}>
            <div className={'text-xl text-white'}>
                <p className={'p-8'}>背景が赤なのは上位div領域</p>
            </div>

            <div className={'bg-purple-950'}>
                <div className={'text-xl text-white'}>背景が紫なのはsvg領域</div>
                <NetworkGraph/>
            </div>

        </div>
    )
}

export default App;
