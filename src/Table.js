import React from "react";
import "./Table.css";
import numeral from "numeral";
import Avatar from 'react-avatar';


function Table({ countries }) {
    return ( <
        >
        <
        div className = "table" > {
            countries.map((country) => ( <
                tr >

                <
                td > < Avatar size = "30"
                round = "50%"
                src = { country.countryInfo.flag } > < /Avatar></td >
                <
                td > { country.country } < /td> <
                td >
                <
                strong > { numeral(country.cases).format("0,0") } < /strong> <
                /td> <
                /tr>
            ))
        } <
        /div>

        <
        />

    );
}

export default Table;