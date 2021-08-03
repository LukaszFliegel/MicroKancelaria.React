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
              <Route path="/BankAccouns">
                <BankAccounsPage />
              </Route>
              <Route path="/Contractors">
                <ContractorsPage />
              </Route>              
              <Route path="/InvestmentTypes">
                <InvestementTypesPage />
              </Route>
              <Route path="/MeasurementUnits">
                <MeasurementUnitsPage />
              </Route>
              <Route path="/PaymentMethods">
                <PaymentMethodsPage />
              </Route>
              <Route path="/Investments">
                <InvestmentsPage />
              </Route>
              <Route path="/Investments">
                <InvestmentsPage />
              </Route>
              <Route path="/Firms">
                <FirmsPage />
              </Route>
              <Route path="/FinancialYears">
                <FinancialYearsPage />
              </Route>
              <Route exact path="/PurchaseInvoices">
                <PurchaseInvoicesPage />
              </Route>
              <Route exact path="/SellInvoices">
                <SellInvoicesPage />
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