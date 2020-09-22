import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { axios } from '../axios';

/**
 * features that need developing for our ppl lister app
 * - i can see a list of people
 * - i provide a truncated 7 character Identifier for people based on 
 * their first+last names in upper case. Eg
 *  Patrick Simonian would be PSIMONI, 
 *  Ben Anderson would be BENANDE
 * - the truncated name is added as label beside their name to the 'left'
 * - i can delete a person from the list by selecting a 'delete button' to the right of their name
 */
function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {

      const ppl = await axios.get('/people');
      setPeople(ppl);
    }
    fetchPeople();
  }, [setPeople, people]);


  return (
    <Container style={{paddingTop: '60px'}}>
      <h1 style={{textAlign: 'center', marginBottom: '45px'}}>People Lister</h1>
      <ListGroup>
        {people.length > 0 && 
          people.map(p => (
            <ListGroupItem key={p.firstName} style={{display: 'flex', alignItems: 'center'}}>
              <Badge variant="primary" style={{marginRight: '10px'}}>IDENTIFIER</Badge> 
                {p.firstName} {p.lastName}
              <Button style={{ marginLeft: 'auto' }} variant="danger">Delete</Button>
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </Container>
  );
}

export default App;
