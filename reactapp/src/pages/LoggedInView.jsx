import React from "react";


function LoggedInView(){
    return (

        <Container className="mt-5 container-loggedInView">
            <Row  >

                <div  >
                    <h2> Aktiva Bokningar</h2>

                    <BookingDetail />
                </div>

             

            </Row>
            <Row>

                <div>
                    <h2> Tidigare Bokningar</h2>

                    <BookingDetail />

                    <BookingDetail />
                </div>

            </Row>

        </Container >
    );

}
export default LoggedInView;