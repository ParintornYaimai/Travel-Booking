import React,{useState,useEffect} from 'react'
import CommonSection from '../shared/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import TourCard from '../shared/TourCard'
import { useLocation } from 'react-router-dom'

const SearchResultList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { state } = location;
        if (state && state.data) {
          setData(state.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location]);


  return (
    <>
      <CommonSection title={`Tour Search Result`}/>
      <section>
        <Container>
          <Row>
            {
              data.length === 0?(
                <h4>No tour found</h4>
              ):(
                <Col lg='3' className='mb-4'>
                  <TourCard tour={data}/>
                </Col>
              )
            }
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SearchResultList