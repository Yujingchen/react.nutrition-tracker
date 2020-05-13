import React, { Component } from 'react';
import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header/Header"
import "./MainLayout.scss"
class MainLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="app">
                <Sidebar />
                <div className="content">
                    <Header />
                    {children}
                </div>
            </div>
        );
    }
}

export default MainLayout;
