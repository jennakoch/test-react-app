import React from 'react';
import Card from './Card/Card';

const CardList = (props) => {
  return props.users.map((user, index) => <Card user={user} key={index} />);
};

export default CardList;
