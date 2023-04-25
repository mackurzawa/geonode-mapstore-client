import React from 'react';
import PropTypes from 'prop-types';


const DefinitionList = ({itemslist}) => {

    const items = itemslist?.map( item => {
        return (
            item.value && <>
                <dt className="DList-cell DList-cell--medium"><strong>{item.label}</strong></dt>
                <dd className="DList-cell">{item.value}</dd>
            </>

        );
    });

    return (
        <dl className="DList DList--2cols">
            {items}
        </dl>
    );
};


DefinitionList.propTypes = {
    itemslist: PropTypes.array
};

DefinitionList.defaultProps = {
    itemslist: []
};


export default DefinitionList;
