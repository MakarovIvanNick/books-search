import React from 'react';
export const DropDownMenu = ({label, data, selected}) => {
    return (
        <div className="col col-lg-3 col-md-5 mb-3 text-center">
            <label className="text-center text-light fw-bold px-3">{label}</label>
            <select className="text-muted" onChange={(event) => selected(event.target.value)}>
                {
                    data.map(item => <option className="text-muted" value={item} key={item}>{item}</option> )
                }
            </select>
        </div>
    )
}
