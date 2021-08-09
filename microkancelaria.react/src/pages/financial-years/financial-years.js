import { Card } from 'antd';

const FinancialYearsPage = () => {
    return ( 
        <div>
            <Card title="Financial Years Page" >                
                <p>Page should contain grid with list of the entity with the possibility of add/edit and delete</p>
                <p>All CRUD operations for the entity. One button for "Add" (on the top maybe?) and grid actions for delete/edit</p>                
                <p>Routing:
                    <ul>
                        <li>/FinancialYears - grid with list of entitites</li>
                        <li>/FinancialYear/:id - page with form to edit the entity</li>
                        <li>Addount should be on the rout /FinancialYears, page should just change the "mode"</li>
                        <li>After adding the entity (after confirming) webapp should redirect to the edit page of added entity</li>
                    </ul>
                </p>
                <p>Additional actions:
                    <ul>
                        <li>Set as current - should set chosen firm as a current one</li>
                    </ul>
                </p>
            </Card>
        </div>
     );
}
 
export default FinancialYearsPage;