import { Card } from 'antd';

const FirmsPage = () => {
    return ( 
        <div>
            <Card title="Firms Page" >                
                <p>Page should contain grid with list of the entity with the possibility of add/edit and delete</p>
                <p>All CRUD operations for the entity. One button for "Add" (on the top maybe?) and grid actions for delete/edit</p>                
                <p>Routing:
                <br />
                        - /Firms - grid with list of entitites<br />
                        - /Firm/:id - page with form to edit the entity<br />
                        - Adding should be on the rout /Firms, page should just change the "mode"<br />
                        - After adding the entity (after confirming) webapp should redirect to the edit page of added entity<br />
                </p>
                <p>Additional actions:
                <br />
                        - Set as current - should set chosen firm as a current one<br />
                </p>
            </Card>
        </div>
     );
}
 
export default FirmsPage;