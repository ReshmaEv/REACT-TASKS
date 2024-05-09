import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';



function App() {
  const data = [
    {
      id: 1,
      name: 'adam johnson',
      job: 'Developer',
      image: 'https://t4.ftcdn.net/jpg/05/58/89/69/240_F_558896972_un5SuLBtmocbehvKQVfrKt95CEZ08JV9.jpg'

    }, {
      id: 2,
      name: "linda larson",
      job: 'Manager',
      image: 'https://t3.ftcdn.net/jpg/07/03/43/84/240_F_703438425_IRIFnsJ7txpG803yNhnnHlRHKTBqAiIs.jpg'
    },
    {
      id: 3,
      name: "marry hudson",
      job: "designer",
      image: 'https://t4.ftcdn.net/jpg/03/28/94/79/240_F_328947974_26fQsrAPA5cLoL9fSfWZhLM58AQO6rCz.jpg'
    },
    {
      id: 4,
      name: "nina hudson",
      job: "designer",
      image: 'https://t4.ftcdn.net/jpg/05/93/92/73/240_F_593927375_w8abSGDLkkXzr8AbYiWPTE01BRwfkxCh.jpg'
    },
    {
      id: 5,
      name: "margo larson",
      job: 'designer',
      image: 'https://t4.ftcdn.net/jpg/05/58/89/69/240_F_558896972_un5SuLBtmocbehvKQVfrKt95CEZ08JV9.jpg'
    },
    {
      id: 6,
      name: 'nocole scavo',
      job: "designer",
      image: 'https://t3.ftcdn.net/jpg/05/74/56/28/240_F_574562866_WCOjxYSt0vDlaBFpcjg1v17BjAxC64Ze.jpg'
    }
  ]
  return (

    <div className="App">
      {
        data.map((p) => (
          <>
            <Card  key={p.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p.image} />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.job}</Card.Text>
              </Card.Body>
            </Card>


          </>
        ))
      }




    </div>






  );
}

export default App;
