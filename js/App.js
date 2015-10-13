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
                <div class="frontend-content section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12" style="padding-top: 20px;">
                                <div class="col-md-2">
                                    <ul class="list-group left-nav">
                                        <!-- ngRepeat: menu in menuList --><li class="list-group-item ng-binding ng-scope active" ng-repeat="menu in menuList" ng-class="menu.active" ui-sref="role" href="#/role">角色管理
                                    </li><!-- end ngRepeat: menu in menuList --><li class="list-group-item ng-binding ng-scope" ng-repeat="menu in menuList" ng-class="menu.active" ui-sref="user" href="#/user">用户管理
                                    </li><!-- end ngRepeat: menu in menuList -->
                                    </ul>
                                </div>
                                <!-- uiView:  --><div class="col-md-10 main ng-scope" ui-view=""><div class="panel panel-default ng-scope">
                                <div class="panel-body">
                                    <form class="form-inline ng-pristine ng-valid" novalidate="" name="searchFormV" ng-submit="search()">
                                        <div class="form-group select_group">
                                            <label for="platform">平台</label> <select id="platform" class="form-control ng-pristine ng-valid" name="platform" ng-model="searchForm.systemId">
                                            <!-- ngRepeat: platform in platformList --><option ng-repeat="platform in platformList" value="oapage" class="ng-binding ng-scope">埋点下发</option><!-- end ngRepeat: platform in platformList --><option ng-repeat="platform in platformList" value="qmx" class="ng-binding ng-scope">启明星系统</option><!-- end ngRepeat: platform in platformList --><option ng-repeat="platform in platformList" value="QMXSSO" class="ng-binding ng-scope">权限系统</option><!-- end ngRepeat: platform in platformList -->
                                        </select>
                                        </div>
                                        <div class="form-group select_group">
                                            <label for="roleName">角色名称</label> <input type="text" ng-model="searchForm.roleName" class="form-control ng-pristine ng-valid" id="roleName" placeholder="角色名称">
                                        </div>
                                            <button type="submit" class="btn btn-primary">查询</button>
                                            <button class="btn btn-primary" ng-click="toAddRole()">新增</button>
                                        </form>
                                    </div>
                                    <div class="role-table-container fixed-table-container">
                                        <table st-table="roleList" st-safe-src="rawRoleList" class="table table-bordered table-hover ">
                                            <thead>
                                            <tr>
                                                <!--<th>序号</th>-->
                                                <th>平台</th>
                                                <th>角色</th>
                                                <th>权限</th>
                                                <th>操作</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr ng-show="roleList.length===0" class="ng-hide">
                                                <td colspan="4" style="text-align: center;">结果为空</td>
                                            </tr>
                                            <!-- ngRepeat: role in roleList --><tr ng-repeat="role in roleList" class="ng-scope">
                                                <!--  <td>{{role.order}}</td>-->
                                                <td class="ng-binding">埋点下发</td>
                                                <td class="ng-binding">PM</td>
                                                <td class="ng-binding">新增埋点,提交审批,埋点处理,我的埋点,Page管理,Para参数管理,版本期限管理,埋点导入</td>
                                                <td><a ng-click="deleteRole(role.role)" x-confirm-hint="确认删除“PM”角色吗？">删除</a> <a ng-click="toUpdateRole(role)">修改</a></td>
                                            </tr><!-- end ngRepeat: role in roleList --><tr ng-repeat="role in roleList" class="ng-scope">
                                                <!--  <td>{{role.order}}</td>-->
                                                <td class="ng-binding">埋点下发</td>
                                                <td class="ng-binding">RD</td>
                                                <td class="ng-binding">埋点处理</td>
                                                <td><a ng-click="deleteRole(role.role)" x-confirm-hint="确认删除“RD”角色吗？">删除</a> <a ng-click="toUpdateRole(role)">修改</a></td>
                                            </tr><!-- end ngRepeat: role in roleList --><tr ng-repeat="role in roleList" class="ng-scope">
                                                <!--  <td>{{role.order}}</td>-->
                                                <td class="ng-binding">埋点下发</td>
                                                <td class="ng-binding">RR</td>
                                                <td class="ng-binding">埋点处理,我的埋点</td>
                                                <td><a ng-click="deleteRole(role.role)" x-confirm-hint="确认删除“RR”角色吗？">删除</a> <a ng-click="toUpdateRole(role)">修改</a></td>
                                            </tr><!-- end ngRepeat: role in roleList --><tr ng-repeat="role in roleList" class="ng-scope">
                                                <!--  <td>{{role.order}}</td>-->
                                                <td class="ng-binding">埋点下发</td>
                                                <td class="ng-binding">需求方</td>
                                                <td class="ng-binding">新增埋点,提交审批,我的埋点</td>
                                                <td><a ng-click="deleteRole(role.role)" x-confirm-hint="确认删除“需求方”角色吗？">删除</a> <a ng-click="toUpdateRole(role)">修改</a></td>
                                            </tr><!-- end ngRepeat: role in roleList -->
                                            </tbody>
                                        </table>
                                    </div>
                                </div></div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
})
//    <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
//<NavItem eventKey={1} href="/home">权限系统</NavItem>
//<NavItem eventKey={2} title="Item">启明星管理</NavItem>
//    </Nav>
export default  App
