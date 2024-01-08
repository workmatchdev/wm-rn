import * as Yup from 'yup';

export const CodeEmailSchema = Yup.object().shape({
    email: Yup.string().required('El email es obligatorio').email('El campo Email debe ser un correo electrónico válido')
});

export const CodeSchema = Yup.object().shape({
    code: Yup.string().required('El codigo es obligatorio')
});

export const PasswordSchema = Yup.object().shape({
    password1: Yup.string().required('El campo contraseña es obligatorio'),
    password2: Yup.string().required('El campo confirmacion de contraseña es obligatorio')
});