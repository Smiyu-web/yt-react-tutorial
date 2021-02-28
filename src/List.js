import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { TabBodyContainer } from './components/tab-body-container';

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n+3) {
    border-top: 1px solid #D9DBDE;
  }
`

export const List = ({ langs }) => {

  // subscribe -> unscribe?
  // useEffect(() => {
  //   console.log('list.js');

  //   return () => {
  //     console.log('list.js: unmount');
  //   }
  // })

  return (
    <TabBodyContainer title="Languages List">
      {
        langs.map((lang, index) => {
          return <ListItem key={index}>{ lang }</ListItem>
        })
      }
    </TabBodyContainer>
  )
}