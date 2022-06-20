import React from 'react';
import {OverlayTrigger, Button, Popover} from 'react-bootstrap/'
import { BsSearch } from 'react-icons/bs';

export const SearchPopUp = () => {
  return (
<>
  {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
          <Popover.Body>
            <input placeholder='Search'></input>
            <BsSearch/>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="secondary">Popover on {placement}</Button>
    </OverlayTrigger>
  ))}
</>
  )
}
