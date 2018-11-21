import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './index.css';
 
const { Header, Sider, Content, Footer } = Layout;

class Students extends Component {

    constructor(props){
        super(props);


    }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
//       <Layout>
//   <Header>header</Header>
//   <Layout>
//   {/* <Layout> */}
//         <Sider
//           trigger={null}
//           collapsible
//           collapsed={this.state.collapsed}
//         >
//           <div className="logo" />
//           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//             <Menu.Item key="1">
//               <Icon type="user" />
//               <span>students</span>
//             </Menu.Item>
//             <Menu.Item key="2">
//               <Icon type="user" />
//               <span>trainers</span>
//             </Menu.Item>
//             <Menu.Item key="3">
//               <Icon type="video-camera" />
//               <span>classes</span>
//             </Menu.Item>
//             <Menu.Item key="3">
//               <Icon type="setting" />
//               <span>settings</span>
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout>
//           <Header style={{ background: '#fff', padding: 0 }}>
//             <Icon
//               className="trigger"
//               type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
//               onClick={this.toggle}
//             />
//           </Header>
//           <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
//             Content
//           </Content>
//         </Layout>
//       {/* </Layout> */}
//     <Content>main content</Content>
//   </Layout>
//   <Footer>footer</Footer>
// </Layout>


      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>students</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <span>trainers</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="video-camera" />
              <span>classes</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="setting" />
              <span>settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}



export default Students;
  