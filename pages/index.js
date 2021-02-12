import {Card, Container, Button, Alert, Image} from "react-bootstrap"
import Link from 'next/link'

export default function dashboard() {
  return (
      <>
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "600px" }}>
            <Card>

              <Card.Body className = "align-items-center justify-content-center">

                <h1 className="text-center mb-4">Food Dude Admin</h1>
                <h2 className="text-center mb-4">Welcome </h2>
                <Button href="/menu" variant="secondary" className="btn btn-primary w-100 mt-3">
                  Menu
                </Button>

                <Button href="/orders" variant="secondary" className="btn btn-primary w-100 mt-3">
                  Orders
                </Button>
                <Button href="/promocode" variant="secondary" className="btn btn-primary w-100 mt-3">
                  Promocode
                </Button>
                <Button href="/pincode" variant="secondary" className="btn btn-primary w-100 mt-3">
                  Pincode
                </Button>

                <div className="w-100 text-center mt-2">
                </div>

              </Card.Body>
            </Card>
          </div>
        </Container>
      </>
  )
}
