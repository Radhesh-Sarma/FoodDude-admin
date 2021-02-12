import {Button, Card, Container, Table, Form, Jumbotron,Image} from "react-bootstrap";
const baseUrl = 'https://fooddude.herokuapp.com/'
export default function pincode({data}) {

    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <Image src = "/favicon.ico"/>
                <h1 className="mr-5">Food Dude Admin</h1>
                <div className="w-100">
                    <h2>Promocode</h2>
                    <Table responsive striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Code</th>
                            <th>Percentage</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Max Usage</th>
                            <th>Max Usage per User</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {i+1}
                                    </td>
                                    <td>{item.code}</td>
                                    <td>{item.Percentage}</td>
                                    <td>{item.Category}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Max_usage}</td>
                                    <td>{item.Max_usage_per_user}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                    <Jumbotron>
                        <Form >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Add Promocode</Form.Label>
                                <Form.Control placeholder="Code" />

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
    const res = await fetch(baseUrl + "api/promocode/get")
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}