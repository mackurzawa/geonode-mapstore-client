import React from 'react';
import {Tabs as TabsRB, Tab} from "react-bootstrap";
import PropTypes from 'prop-types';

const Tabs = ({itemsTab, transition, defaultActiveKey}) => {

    const alltabs = itemsTab.map( (tabInfo, index) => {
        return (
            <Tab  key={index} eventKey={index} title={tabInfo?.title}>
                {tabInfo?.data}
            </Tab>
        );
    });
    return (
        <TabsRB
            defaultActiveKey={defaultActiveKey}
            transition={transition}
            className={"tabs-info"}
            id={"tabs-info"}
        >
            {alltabs}
        </TabsRB>

    );

};


Tabs.propTypes = {
    itemsTab: PropTypes.array,
    transition: PropTypes.bool,
    defaultActiveKey: PropTypes.number
};

Tabs.defaultProps = {
    itemsTab: [],
    transition: true,
    defaultActiveKey: 0
};

export default Tabs;
