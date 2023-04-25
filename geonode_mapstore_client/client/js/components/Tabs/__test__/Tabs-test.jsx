import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Tabs from '../Tabs';

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
        ReactDOM.render( <Tabs itemsTab={[{
            title: "Info"
        }]} />, document.getElementById("container"));
        const el = document.querySelector('.tabs-info');
        expect(el).toExist();
    });

    it('should label first tab same first array obj tittle', () => {
        ReactDOM.render( <Tabs itemsTab={[{
            title: "Info"
        }]} />, document.getElementById("container"));
        const el = document.querySelector("ul > li > a");
        expect(el).toExist();
        expect(el.innerHTML).toBe("Info");
    });

});
