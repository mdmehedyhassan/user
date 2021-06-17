import React from 'react';
import Typewriter from 'typewriter-effect';
const TopHeader = () => {
    return (
        <div className="background-image">
            <div className="container animate__animated animate__jackInTheBox pt-5 pb-5 mt-2 mb-3">
                <h1 className="text-light">MAKE</h1>
                <h1 className="text-primary"><Typewriter
                    options={{
                        strings: ['FUTURE..', 'CHANGE..', 'TRANSFORMATION..', 'INNOVATION..'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h1>
                <h1 className="text-light">HAPPEN</h1>
            </div>
        </div>
    );
};

export default TopHeader;