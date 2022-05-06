export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Укажите адрес электронной почты';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Некорректный email';
    }
    if (!values.firstName) {
      errors.firstName = 'Укажите имя';
    } else if (values.firstName.length < 4) {
      errors.firstName = 'Имя должно быть больше 3 символов';
    }
    if (!values.lastName) {
        errors.lastName = 'Укажите фамилию';
      } else if (values.lastName.length < 4) {
        errors.lastName = 'Фамилия должна быть больше 3 символов';
      }
    if (!values.number) {
        errors.number = 'Укажите номер телефона';
      } else if (!/^\+?[78][ ]?\(?\d{3}\)?[ ]?-?\d{3}-?\d{2}-?\d{2}$/.test(values.number)) {
        errors.number = 'Формат номера: +7 (111) 111-11-11';
      }
      if (!values.message) {
        errors.message = 'Укажите сообщение';
      } else if (values.message.length < 4) {
        errors.message = 'Сообщене должно быть больше 3 символов';
      }
    return errors;
  };