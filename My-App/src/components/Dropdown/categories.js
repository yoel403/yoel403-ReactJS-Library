import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const categories = () => {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      All categories
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Latest</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Finished</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default categories