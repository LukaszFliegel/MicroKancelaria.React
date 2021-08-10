import { Card } from 'antd';

const CompensationsPage = () => {
    return ( 
        <div>
            <Card title="Compensations Page" >                
                <p>Page should contain grid with list of the entity with the possibility of add/edit and delete</p>
                <p>All CRUD operations for the entity. One button for "Add" (on the top maybe?) and grid actions for delete/edit</p>                
                <p>Routing:
                    <br />
                        - /Compensations - grid with list of entitites<br />
                        - /Compensation/:id - page with form to edit the entity<br />                        
                        - Adding should be on the rout /BankAccounts, page should just change the "mode"<br />
                        - After adding the entity (after confirming) webapp should redirect to the edit page of added entity<br />
                </p>
                <p>Additional actions:
                <br />
                        - Print compensation - should go to /reports/Compensation/:id<br />
                </p>
                <p>
                    When adding position of a compensation we are picking sell invoice and purchase invoice
                </p>
            </Card>
        </div>
     );
}
 
export default CompensationsPage;