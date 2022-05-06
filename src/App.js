import React from 'react';
import useForm from "./useForm";
import validate from './validationRules';
import styled from 'styled-components'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Wrapper = styled.div`
  width: 100wh;
  height: 100vh;
  background: LightGreen;
  align-items: center;
  display: flex;
  justify-content: center;
`

const FormLabel = styled('div')({
  textAlign: 'center',
  fontSize: 25,
  fontWeight: 'bold',
  marginBottom: 20
});

const App = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log(values);
  }

  return (
    <Wrapper>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root, .MuiButton-root': {
            m: 1,
            minWidth: '30ch'
          },
          maxWidth: '100%',
          backgroundColor: 'white',
          borderRadius: '15px',
          p: 8,
        }}
        onSubmit={handleSubmit}
      >
        <FormLabel>Форма отправки сообщений</FormLabel>
        <div>
          <TextField
            label="Имя"
            placeholder="Имя"
            helperText ={errors.firstName}
            name="firstName"
            onChange={handleChange} value={values.firstName || ''}
            required
          />
          <TextField
            label="Фамилия"
            placeholder="Фамилия"
            helperText ={errors.lastName}
            name="lastName"
            onChange={handleChange} value={values.lastName || ''}
            required
          />
        </div>
        <div>
        <TextField
            label="Телефон"
            placeholder="Телефон"
            helperText ={errors.number}
            name="number"
            type="tel"
            onChange={handleChange} value={values.number || ''}
            required
          />
          <TextField
            label="Email адрес"
            placeholder="Email адрес"
            helperText ={errors.email}
            type="email"
            name="email"
            onChange={handleChange} value={values.email || ''}
            required
          />
        </div>
        <div>
          <Box width="98%">
            <TextField fullWidth
              multiline
              rows={4}
              label="Сообщение"
              placeholder="Сообщение"
              helperText ={errors.message}
              name="message"
              onChange={handleChange} value={values.message || ''}
              required
            />
          </Box>
        </div>
        <Button sx={{ backgroundColor: 'orange', color: 'white'}}variant="contained" type="submit">Отправить</Button>
      </Box>
    </Wrapper>
  );
}

export default App;
