import { Checkbox } from 'components/common/Checkbox';
import React, { useState } from 'react';

const disabled = true;

const Space = () => <div style={{ marginBottom: '10px' }}></div>;

export const Test = () => {
    const [checked, setChecked] = useState(false);

    const onChange = () => setChecked(!checked);

    return (
        <div
            style={{
                width: '600px',
                minHeight: '600px',
                margin: 'auto',
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <Checkbox checked={checked} onChange={onChange} />
            <Space />
            <Checkbox checked={checked} disabled={disabled} onChange={onChange} />
            <Space />
        </div>
    );
};
