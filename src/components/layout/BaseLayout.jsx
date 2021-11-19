import React from 'react'
import {Link} from 'react-router-dom';

function BaseLayout(props) {
    return (
        <div>
            {/* nav */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shoppinglist">Shopping List</Link></li>
                <li><Link to="/addressbook">Address Book</Link></li>
                <li><Link to="/colorpicker">Color Picker</Link></li>
            </ul>
            {props.children}
        </div>
    )
}

export default BaseLayout
