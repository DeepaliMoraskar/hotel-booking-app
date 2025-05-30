import React, { useState } from "react";
import Row from "../components/Row";
import CabinsTable from "../layouts/cabins/CabinsTable";
import Heading from "../components/Heading";
import Button from "../components/Button";
import CreateCabinsForm from "../layouts/cabins/CreateCabinsForm";

export default function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type='horizontal'>
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinsTable />
        <Button onClick={()=> setShowForm((show) => !show)}>Add New Cabin</Button>
        {showForm && <CreateCabinsForm/>}
      </Row>
    </>
  );
}
