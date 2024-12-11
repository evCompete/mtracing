import React from "react";

function Test() {

    return (
        <div
            className="nes-container  with-title"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full viewport height
                textAlign: 'center', // Center text
            }}
        >
            <span className="nes-text is-primary">Primary</span>
            <span className="nes-text is-success">Success</span>
            <span className="nes-text is-warning">Warning</span>
            <span className="nes-text is-error">Error</span>
            <span className="nes-text is-disabled">Disabled</span>

            <a className="nes-btn" href="#">
                Normal
            </a>

            <button type="button" className="nes-btn is-primary">
                Primary
            </button>
            <button type="button" className="nes-btn is-success">
                Success
            </button>
            <button type="button" className="nes-btn is-warning">
                Warning
            </button>
            <button type="button" className="nes-btn is-error">
                Error
            </button>
            <button type="button" className="nes-btn is-disabled">
                Disabled
            </button>

            <div className="lists">
                <ul className="nes-list is-disc">
                    <li>Coming Soon...</li>
                </ul>
            </div>
        </div>
    );


};

export default Test;