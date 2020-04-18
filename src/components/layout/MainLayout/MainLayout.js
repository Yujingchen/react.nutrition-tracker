import React, { Component } from 'react';
import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header/Header"

class MainLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <main className="app">
                <Sidebar classes="sidebar bg-green" />
                <div className="content">
                    <Header />
                    {children}
                </div>
            </main>
        );
    }
}

export default MainLayout;
