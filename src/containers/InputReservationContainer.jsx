import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputReservation from '../components/InputReservation';
import {
  updateReservationName,
  updateReservationCategory,
  updateReservationAddress,
  addReservation,
} from '../modules/actions';

export default function InputReservationContainer() {
  const { name, category, address } = useSelector((state) => ({
    name: state.reservation.name,
    category: state.reservation.category,
    address: state.reservation.address,
  }));

  const dispatch = useDispatch();

  function handleChangeReservationName(event) {
    dispatch(updateReservationName(event.target.value));
  }

  function handleChangeReservationCategory(event) {
    dispatch(updateReservationCategory(event.target.value));
  }

  function handleChangeReservationAddress(event) {
    dispatch(updateReservationAddress(event.target.value));
  }

  function handleClick() {
    dispatch(addReservation());
  }

  return (
    <InputReservation
      name={name}
      onChangeName={handleChangeReservationName}

      category={category}
      onChangeCategory={handleChangeReservationCategory}

      address={address}
      onChangeAddress={handleChangeReservationAddress}

      onClick={handleClick}
    />
  );
}
