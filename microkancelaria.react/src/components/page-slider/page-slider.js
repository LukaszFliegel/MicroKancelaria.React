import { Layout, Menu } from 'antd';
// import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import ViewDashboard from '@2fd/ant-design-icons/lib/ViewDashboard'
import ViewListOutline from '@2fd/ant-design-icons/lib/ViewListOutline'
import PlusBoxOutline from '@2fd/ant-design-icons/lib/PlusBoxOutline'
import ApproximatelyEqual from '@2fd/ant-design-icons/lib/ApproximatelyEqual'
import Bank from '@2fd/ant-design-icons/lib/Bank'
import AccountSupervisorOutline from '@2fd/ant-design-icons/lib/AccountSupervisorOutline'
import Strategy from '@2fd/ant-design-icons/lib/Strategy'
import AlphaI from '@2fd/ant-design-icons/lib/AlphaI'
import TapeMeasure from '@2fd/ant-design-icons/lib/TapeMeasure'
import Cash from '@2fd/ant-design-icons/lib/Cash'
import OfficeBuildingOutline from '@2fd/ant-design-icons/lib/OfficeBuildingOutline'
import CalendarBlank from '@2fd/ant-design-icons/lib/CalendarBlank'
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const PageSlider = () => {
    return ( 
      <Sider width={208} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          defaultOpenKeys={['dashboard']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="dashboard" icon={<ViewDashboard />}>            
            <span>Dashboard</span>
            <Link to="/" />
          </Menu.Item>
          <SubMenu key="sellInvoices" title="Sell invoices">
            <Menu.Item key="sellInvoicesList" icon={<ViewListOutline />}>
                <span>List</span>
                <Link to="/SellInvoices" />
            </Menu.Item>
            <Menu.Item key="sellInvoicesCreate" icon={<PlusBoxOutline />}>
                <span>Create</span>
                <Link to="/SellInvoicesCreate" />
            </Menu.Item>
            <Menu.Item key="sellInvoicesCompensate" icon={<ApproximatelyEqual />}>                
                <span>Compensate</span>
                <Link to="/SellInvoicesCompensate" />
            </Menu.Item>
          </SubMenu>
          <SubMenu key="purchaseInvoices" title="Purchase invoices">
            <Menu.Item key="purchaseInvoicesList" icon={<ViewListOutline />}>                
                <span>List</span>
                <Link to="/PurchaseInvoices" />
            </Menu.Item>
            <Menu.Item key="purchaseInvoicesCreate" icon={<PlusBoxOutline />}>                
                <span>Create</span>
                <Link to="/PurchaseInvoicesCreate" />
            </Menu.Item>
            <Menu.Item key="purchaseInvoicesCompensate" icon={<ApproximatelyEqual />}>                
                <span>Compensate</span>
                <Link to="/PurchaseInvoicesCompensate" />
            </Menu.Item>
          </SubMenu>
          <SubMenu key="dictionaries" title="Dictionaries data">
            <Menu.Item key="bankAccounts" icon={<Bank />}>                
                <span>Bank Accounts</span>
                <Link to="/BankAccouns" />
            </Menu.Item>
            <Menu.Item key="contractors" icon={<AccountSupervisorOutline />}>                
                <span>Contractors</span>
                <Link to="/Contractors" />
            </Menu.Item>
            <Menu.Item key="investmentTypes" icon={<AlphaI />}>                
                <span>Investment Types</span>
                <Link to="/InvestmentTypes" />
            </Menu.Item>
            <Menu.Item key="measurementUnits" icon={<TapeMeasure />}>                
                <span>Measurement Units</span>
                <Link to="/MeasurementUnits" />
            </Menu.Item>
            <Menu.Item key="paymentMethods" icon={<Cash />}>
                <span>Payment Methods</span>
                <Link to="/PaymentMethods" />
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="investments" icon={<Strategy />}>            
            <span>Investments</span>
            <Link to="/Investments" />
          </Menu.Item>
          <Menu.Item key="firms" icon={<OfficeBuildingOutline />}>            
            <span>Firms</span>
            <Link to="/Firms" />
          </Menu.Item>
          <Menu.Item key="financialYears" icon={<CalendarBlank />}>            
            <span>Financial Years</span>
            <Link to="/FinancialYears" />
          </Menu.Item>
        </Menu>
      </Sider>
     );
}
 
export default PageSlider;