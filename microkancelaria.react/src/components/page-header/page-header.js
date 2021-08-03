import logo from './logo.svg'
import { Layout, Menu } from 'antd';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const PageHeader = () => {
    // const history = useHistory();

    // const onMenuClick = (route) => {
    //     // const route = e.target.value;
    //     history.push(`/${route.key}`);
    // }
    return ( 
    <Header className="header">
            <div className="logo" >
                <img src={logo} className="logoImage" alt="logo" />
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                <Menu.Item key="1">
                    <span>Payment Methods</span>
                    <Link to="/PaymentMethods" />
                </Menu.Item>
                <Menu.Item key="2">
                    <span>Measurement Units</span>
                    <Link to="/MeasurementUnits" />
                </Menu.Item>
                <Menu.Item key="3">
                    <span>Investment Types</span>
                    <Link to="/InvestmentTypes" />
                </Menu.Item>
            </Menu>
    </Header>
     );
}
 
export default PageHeader;