import React from 'react'

import UsersList from '../components/UsersList'

const USERS = [{id:"uid4", name: "tyh", image: "https://www.thespruceeats.com/thmb/E1v3koUrFM5HhL6Yj8HKNuSmLoY=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg", places: 4}];

const Users = () => {
  return (
    <UsersList items={USERS} />
  )
}

export default Users