import React from 'react';
function footer() {
    return (
        <footer>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <a href="https://github.com/Jeith">
                <img src="../GitHub.png" alt="Github Logo" />
            </a>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p style={{fontFamily: 'helvetica'}}>Developed and Designed by: <a href="http://keith-pittman.com/" style={{textDecoration: 'none', fontFamily: 'helvetica'}}>Keith Pittman</a></p>
            </div>
        </footer>
    );
}

export default footer;