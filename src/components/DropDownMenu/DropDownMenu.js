import React from 'react';
export const DropDownMenu = ({label, data}) => {
    return (
        <div className="col col-lg-3 col-md-5 mb-3 text-center">
            <label className="text-center text-light fw-bold px-3">{label}</label>
            <select className="text-muted">
                {
                    data.map(item => <option className="text-muted" value={item}>{item}</option> )
                }
            </select>
        </div>
    )
}
