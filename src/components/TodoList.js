import React from "react";
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    addDate = e => {
        if (!this.refs.title.value) return;
        if (e.keyCode === 13) {
            const list = this.state.list;
            list.push(this.refs.title.value);
            this.refs.title.value=''
            this.setState({
                list
            });
        }
    };
    removeData = k => {
        const list = this.state.list;
        list.splice(k, 1);
        this.setState({ list });
    };
    render() {
        return (
            <div className="todolist_C">
                <h2>TodoList 演示</h2>
                <input type="text" ref="title" onKeyUp={this.addDate} />
                <ul className="list_view">
                    {this.state.list.map((v, k) => {
                        return (
                            <li key={k}>
                                {v}
                                <button
                                    className="del_btn_s ml10"
                                    onClick={this.removeData.bind(this, k)}
                                >
                                    -
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;
