import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import logoUrl from './logo.png'
var App = React.createClass({
    getInitialState() {
        return {
            activeKey: 1,
            userInfo: '张凌康',
            logoUrl: logoUrl,
            moduleList: [{
                name: '启明星管理'
            }, {
                name: '权限系统'
            }]
        }
    },

    handleSelect(selectedKey) {
        this.setState({activeKey: selectedKey})
    },

    render() {
        return (
            <div>
                <header>
                    <div className="container logo-banner" style={{padding:"20px"}}>
                        <a href="#">
                            <img src={this.state.logoUrl}/>
                        </a>

                        <div className="pull-right">
                            <font style={{fontSize:"12px",marginRight:"15px"}}>{this.state.userInfo}</font>
                            <a><font >退出</font></a>
                        </div>
                    </div>
                </header>

                <nav className="navbar navbar-default" role="navigation" style={{backgroundColor:"white"}}>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#qmx_menu">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                {
                                    this.state.moduleList.map(function (module, index) {
                                        return <li key={`${index}`} className={`${index == 0 ? 'active' : ''}`}><a
                                            href="">{module.name}</a></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
})
//    <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
//<NavItem eventKey={1} href="/home">权限系统</NavItem>
//<NavItem eventKey={2} title="Item">启明星管理</NavItem>
//    </Nav>
export default  App
