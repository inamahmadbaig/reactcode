

import './demo.css';
import { useState } from "react";

export function Animation() {
    const [aniStyle, setAniStyle] = useState('');

    function SpinClick() {
        setAniStyle('image-spain');
    }

    function ZoomClick() {
        setAniStyle('image-zoom');
    }

    return (
        <div className="container-fluid">
            <div 
                className="d-flex flex-column justify-content-center align-items-center" 
                style={{ height: '100vh' }}
            >
                <div className="text-center">
                    <img src="mm.jpg" alt="" className={aniStyle} />
                </div>

                <div className="mt-3">
                    <button onClick={SpinClick} className="btn me-2 btn-primary">
                        Spin
                    </button>
                    <button onClick={ZoomClick} className="btn me-2 btn-warning">
                        Zoom
                    </button>
                </div>
            </div>
        </div>
    );
}