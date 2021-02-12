import {Button, Container, Form, Image, Jumbotron, Table} from "react-bootstrap";

const baseUrl = "https://fooddude.herokuapp.com/"
export default function orders({data}) {

    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <Image src = "/favicon.ico"/>
                <h1 className="mr-5">Food Dude Admin</h1>
                <div className="w-100 mt-5 mb-5">
                    <h2>Orders</h2>
                    <Table responsive striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Order ID</th>
                            <td>User ID</td>
                            <td>Amount</td>
                            <td>Payment Method</td>
                            <td>Promo Code</td>

                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {i+1}
                                    </td>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.billing.finalAmount}</td>
                                    <td>{item.billing.paymentMethod}</td>
                                    <td>{item.billing.PromoCode}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(baseUrl + "api/orders/get")
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}