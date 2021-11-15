import React from 'react';
import ReactDOM from 'react-dom';

import { Toggle } from './utils/components';

window.TOGGLE = {
    initialize: (config) => {
        ReactDOM.render(
            <Toggle
                id={config.id}
                label={config.label}
                toggled={config.toggled}
            />,
            config.target
        );
    }
};
