import styled from 'styled-components';
import { useEffect, useState } from 'react';

const LoadDiv = styled.div`
  padding: 36px;
`

export const withLoading = (WrappedComponents, fetchData) => {
  return () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      fetch();
    }, [])

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    }
    
    const Loadig = (
      <LoadDiv>Loading...</LoadDiv>
    )

    return data ? <WrappedComponents data={data} /> : Loadig;
  }
}