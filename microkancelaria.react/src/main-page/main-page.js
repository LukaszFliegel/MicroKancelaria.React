import React from 'react';

import './main-page.css';
import { Layout } from 'antd';
import PageHeader from '../components/page-header/page-header'
import PageSlider from '../components/page-slider/page-slider'
import { Switch, Route } from 'react-router-dom';
import BankAccounsPage from '../pages/bank-accounts/bank-accounts'
import ContractorsPage from '../pages/contractors/contractors'
import InvestmentsPage from '../pages/investments/investments'
import PaymentMethodsPage from '../pages/payment-methods/payment-methods'
import InvestementTypesPage from '../pages/investment-types/investement-types'
import MeasurementUnitsPage from '../pages/measurement-units/measurement-units'
import FirmsPage from '../pages/firms/firms'
import FinancialYearsPage from '../pages/financial-years/financial-years'
import DashboardPage from '../pages/dashboard/dashboard'
import PurchaseInvoicesPage from '../pages/purchase-invoices/purchase-invoices'
import SellInvoicesPage from '../pages/sell-invoices/sell-ivoices'
import InvestementTypePage from '../pages/investment-types/investement-type'
import SellInvoicesPaymentsPage from '../pages/sell-invoices-payments/sell-invoices-payments'

// import CodeTagsIcon from '@2fd/ant-design-icons/lib/CodeTags'
// import { DashboardOutlined } from '@ant-design/icons';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <PageHeader></PageHeader>
    <Layout>
      <PageSlider></PageSlider>
      <Layout style={{ padding: '0 24px 24px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            // minHeight: 880,
          }}
        >
            <Switch>
              <Route exact path="/BankAccounts">
                <BankAccounsPage />
              </Route>
              <Route exact path="/Contractors">
                <ContractorsPage />
              </Route>              
              <Route exact exact path="/InvestmentTypes">
                <InvestementTypesPage />
              </Route>
              <Route exact path="/MeasurementUnits">
                <MeasurementUnitsPage />
              </Route>
              <Route exact path="/PaymentMethods">
                <PaymentMethodsPage />
              </Route>
              <Route exact path="/Investments">
                <InvestmentsPage />
              </Route>
              <Route exact path="/Investments">
                <InvestmentsPage />
              </Route>
              <Route exact path="/Firms">
                <FirmsPage />
              </Route>
              <Route exact path="/FinancialYears">
                <FinancialYearsPage />
              </Route>
              <Route exact path="/PurchaseInvoices">
                <PurchaseInvoicesPage />
              </Route>
              <Route exact path="/SellInvoices">
                <SellInvoicesPage />
              </Route>      

              <Route exact path="/SellInvoice/:id/payments">
                <SellInvoicesPaymentsPage />
              </Route>  
                      
              <Route exact path="/InvestmentTypes/:id">
                <InvestementTypePage />
              </Route>



              <Route exact path="/">
                <DashboardPage />
              </Route>
            </Switch>
          {/* Content
          <CodeTagsIcon></CodeTagsIcon>
          <DashboardOutlined/> */}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}

export default App;
