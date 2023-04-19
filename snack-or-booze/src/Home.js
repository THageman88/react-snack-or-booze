import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import Snack from "./FoodItem";


function Home({snacks,drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <div>Snack count is : {snacks.length}</div>
            <div>Drink count is : {drinks.length}</div>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
