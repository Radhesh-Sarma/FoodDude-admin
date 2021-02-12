import {Button, Container, Form, Image, Jumbotron, Table} from "react-bootstrap";
const baseUrl = 'https://fooddude.herokuapp.com/'

export default function menu({data}) {

    return (
        <>

            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >

                <Image src = "/favicon.ico"/>
                <h1 className="mr-5">Food Dude Admin</h1>
                <div className="w-100 mt-5 mb-5" >
                    <h2>Menu</h2>
                    <Table responsive striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <td>Category</td>
                            <td>Availability</td>
                            <td>Price</td>
                            <td>Veg</td>
                            <td>Image Link</td>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {i+1}
                                    </td>
                                    <td>{item.Name}</td>
                                    <td>{item.Category}</td>
                                    <td>{item.Price}</td>
                                    <td>{item.Availability}</td>
                                    <td>{item.Veg}</td>
                                    <td>{item.ImgLink}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                    <Jumbotron>


                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><h2>Add Menu Item</h2></Form.Label>
                            <Form.Control className="mt-3" placeholder="Enter Dish Name" />
                            <Form.Control className="mt-3" placeholder="Enter Category" />
                            <Form.Control className="mt-3" placeholder="Enter Price" />
                            <Form.Label className="mt-3">Select Veg (0) or Non Veg(1)</Form.Label>
                            <Form.Control className="mt-3"as="select">
                                <option>0</option>
                                <option>1</option>
                            </Form.Control>
                            <Form.Label className="mt-3">Select Available (0) or Available(1)</Form.Label>
                            <Form.Control className="mt-3" as="select">
                                <option>0</option>
                                <option>1</option>
                            </Form.Control>
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
    const res = await fetch(baseUrl + "api/menu/get")
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}