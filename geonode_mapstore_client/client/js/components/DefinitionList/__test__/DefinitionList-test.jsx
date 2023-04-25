import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import DefinitionList from '../DefinitionList';

const itemslist = [
    {
        "label": "Title",
        "value": "title"
    },
    {
        "label": "Abstract",
        "value": "abstract"
    }
];

describe('Test GeoNode tabs component', () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });
    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });
    it('should render Tabs component', () => {
        ReactDOM.render( <DefinitionList itemslist={itemslist} />, document.getElementById("container"));
        const el = document.querySelector('.DList');
        expect(el).toExist();
    });


});
