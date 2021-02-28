import { useState } from 'react';
import { Button } from './components/button'
import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container';
import { FormModal } from './FormModal'

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`

const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`

const ButtonContainer = styled.div`
  margin-top: 24px;
`
const FormButton = styled(Button)`
  width: 120px;
`

export const Form = ({ onAddLang }) => {
  const [text, setText] = useState('')
  const [showModal, setShowModal] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  return (
    <TabBodyContainer title="Add new propety">
      <form onSubmit={submitForm}>
        <div>
        <Label>Language</Label>
          <Input 
            type="text" 
            values={text} 
            onChange={(e) => 
              setText(e.target.value)
            }
          />
        </div>
        <ButtonContainer>
          <FormButton>Add</FormButton>
        </ButtonContainer>
      </form>
      {
        showModal &&
        <FormModal
          confirm={() => onAddLang(text)}
          cancel={() => setShowModal()}
        />
      }
    </TabBodyContainer>
  )
}