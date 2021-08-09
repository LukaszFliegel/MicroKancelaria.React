import { Card } from 'antd';

const DashboardPage = () => {
    return ( 
        <div>
            {/* <span>Dashboard Page</span> */}

            <Card title="Dashboard Page" >
                <p>Should contain several diagrams or charts like: amount of unpaid purchase/sell invoices, unpaid amount on investments, unpaid amounts per contractor etc.</p>
                <p>From each diagram some sort of link to the payment or list of invoices</p>
                <p>Generally this is a welcome page that should look nice and informative :).</p>
            </Card>
        </div>
     );
}
 
export default DashboardPage;