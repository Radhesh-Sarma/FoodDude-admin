import {useRef,useEffect,useState} from 'react'
import {Button, Container, Table, Form, Jumbotron,Image} from "react-bootstrap";
import postalCodes from 'postal-codes-js';
import axios from 'axios';
const baseUrl = 'https://fooddude.herokuapp.com/'

export default function pincode({data}) {

    const [pincode, setPincode] = useState([]);
    const pincodeRef = useRef()
    const [error,setError]  = useState("")
    const [Data,setData] = useState(data)
    async function handleSubmit(e)
    {
        setError("")
        e.preventDefault();
        const validPostalCode = postalCodes.validate('IND',pincodeRef.current.value)
        if(validPostalCode !== true)
        {
            setError(validPostalCode)
            return
        }
        const requestBody = { Pincode: pincodeRef.current.value};
        setData([...Data,pincodeRef.current.value])
        axios.post(baseUrl + 'api/pincode/add', requestBody)
            .then();
    }

    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <Image src = "/favicon.ico"/>
                <h1 className="mr-5">Food Dude Admin</h1>
                <div className="w-100">
                    <h2>Pincode</h2>
                    <Table responsive striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Pincode</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Data.map((item, i) => {
                            return (
                                    <tr key={i}>
                                        <td>
                                            {i+1}
                                        </td>
                                        <td>{item}</td>
                                    </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                    <Jumbotron>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Add Pincode</Form.Label>
                            <Form.Control  ref = {pincodeRef} placeholder="Enter pincode" />

                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Jumbotron>
                </div>
            </Container>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(baseUrl + "api/pincode/get")
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}
