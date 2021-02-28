import { useState, useEffect } from 'react';
import { List } from './List';
import { Form } from './Form';
import { getLanguages } from './const/languages';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.forcused ? '2px solid #F44336' : 'none'};
`

function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([])

  useEffect(() => {
    fetchLang();
  }, [langs, tab])
  
  const fetchLang = async () => {
    const langs = await getLanguages();
    setLangs(langs)
  }

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list')
  }


  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi forcused={tab === 'list'} onClick={() => setTab('list')}>List</HeaderLi>
          <HeaderLi forcused={tab === 'form'} onClick={() => setTab('form')}>Form</HeaderLi>
        </HeaderUl>
      </Header>
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default App;
