import { useParams } from 'react-router-dom'
import { Card } from 'antd';

const SellInvoicesPaymentsPage = () => {
    const { id } = useParams();

    return ( 
        <div>
            <Card title="Sell Invoices Payments Page (for sell invoice :id)" >                
                <p>Page should contain grid with list of the entity with the possibility of add/edit and delete</p>
                <p>All CRUD operations for the entity. One button for "Add" (on the top maybe?) and grid actions for delete/edit</p>                
                <p>Routing:
                    <br />
                        - /SellInvoice/:id/payments - grid with list of entitites<br />
                        - /SellInvoice/:id/payment/:id - page with form to edit the entity<br />                        
                        - Adding should be on the route /SellInvoice/:id/payments, page should just change the "mode"<br />
                        - After adding the entity (after confirming) webapp should redirect to the edit page of added entity<br />
                </p>
            </Card>
        </div>
     );
}
 
export default SellInvoicesPaymentsPage;