import React, { useState, useEffect, Component } from "react";
import { Card, Row, Col } from "react-materialize";
import API from "../../utils/apiHelper";

function types() {
    const [types, setTypes] = useState([]);
    const [typeInfo, setTypeinfo] = useState(false);

    useEffect(() => {
        API.getTypes().then((res) => {
            setTypes(res.data.results);
        });
        console.log(types);
    }, []);

    return (
        <div class="container">
            <List>{types.map(type)}</List>
        </div>
    );
}
