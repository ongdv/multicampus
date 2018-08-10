import React, { Component } from 'react';
import produce from 'immer';
import MyButton from './MyButton';
import List from './List';

class App extends Component {
    constructor() {
        super()
        this.state = {
            itemlist : [ ]
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        if (!this.num) this.num = 0;
        this.num++;
        let newItemList = produce(this.state.itemlist, (draft) => {
            draft.push({
                no: new Date().getTime(),
                item: "Item" + this.num
            })
        });
        this.setState({ itemlist : newItemList });
    }

    render() {
        return (
            <div className="container">
                <div className="well">
                    <MyButton addItem={this.addItem} />
                    <List itemlist={this.state.itemlist} isLog="true"/>
                </div>
            </div>
        );
    }
}

export default App;