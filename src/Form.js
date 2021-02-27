import { useState } from 'react';


export const Form = ({ onAddLang }) => {
  const [text, setText] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    onAddLang(text)
  }

  return (
    <div>
      <h4>Ddd new propety</h4>
      <form onSubmit={submitForm}>
        <div>
          <input 
            type="text" 
            values={text} 
            onChange={(e) => 
              setText(e.target.value)
            }
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  )
}