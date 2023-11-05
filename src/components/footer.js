import React from 'react';
function footer() {
    return (
        <footer>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <a href="https://github.com/Jeith">
                <img src="../GitHub.png" alt="Github" />
            </a>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p style={{fontFamily: 'helvetica'}}>developed and designed by: <a href="https://portfolio.jeith.com" style={{textDecoration: 'none', fontFamily: 'helvetica'}}>jeith</a></p>
            </div>
        </footer>
    );
}

export default footer;