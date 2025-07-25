import React, { useState } from "react";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinsForm from "./CreateCabinsForm";
import { useDeleteCabin } from "./hooks/useDeleteCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function CabinsRow({ cabin }) {
  const {
    name,
    maxCapacity,
    discount,
    regularPrice,
    image,
    id: cabinId,
  } = cabin;

  const [showForm, setShowForm] = useState(false);

  const { isDeleting, deleteCabin} = useDeleteCabin();

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>{maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div>
          <button
            onClick={() => setShowForm((showForm) => !showForm)}
            disabled={isDeleting}
          >
            Edit
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinsForm cabinUpdate={cabin} setShowForm={setShowForm} showForm={showForm}/>}
    </>
  );
}
