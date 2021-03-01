import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const LoadDiv = styled.div`
  height: 100%auto;
  padding: 36px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`

export const withLoading = (WrappedComponents, fetchData) => {
  return () => {
    const [data, setData] = useState(null)
    const [theme] = useContext(ThemeContext);

    useEffect(() => {
      fetch();
    }, [])

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    }
    
    const Loadig = (
      <LoadDiv theme={theme}>Loading...</LoadDiv>
    )

    return data ? <WrappedComponents data={data} /> : Loadig;
  }
}