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

export const LoginSchema = Yup.object().shape({
    email: Yup.string().required('El campo email es obligatorio').email('El campo email debe ser un correo electrónico válido'),
    password: Yup.string().required('El campo contraseña es obligatorio')
});


export const CreateAccountUserSchema = Yup.object().shape({
    email: Yup.string().required('El campo email es obligatorio').email('El campo email debe ser un correo electrónico válido'),
    lastName: Yup.string().required('El campo apellidos es obligatorio'),
    gender: Yup.string().required('El campo genero es obligatorio'),
    password: Yup.string().required('El campo contraseña es obligatorio'),
    passwordConfirmation: Yup.string().required('El campo confirmar contraseña es obligatorio'),
    name: Yup.string().required('El campo nombre es obligatorio'),
});

export const CreateAccountCompanySchema = Yup.object().shape({
    email: Yup.string().required('El campo email es obligatorio').email('El campo email debe ser un correo electrónico válido'),
    lastName: Yup.string().required('El campo apellidos es obligatorio'),
    gender: Yup.string().required('El campo genero es obligatorio'),
    password: Yup.string().required('El campo contraseña es obligatorio'),
    passwordConfirmation: Yup.string().required('El campo confirmar contraseña es obligatorio'),
    name: Yup.string().required('El campo nombre es obligatorio'),
    bussinesName: Yup.string().required('El campo "Nombre de la empresa" es obligatorio'),
});

export const AddStudiesSchema = Yup.object().shape({
    college: Yup.string().required('El campo institución es obligatorio'),
    title: Yup.string().required('El campo "Nombre de la carrera o diplomado" es obligatorio'),
    // start: Yup.date()
    //     .max(new Date(), 'La fecha no puede ser mayor o igual que la actual')
    //     .when(
    //         'end',
    //         (end, schema) =>
    //             end && schema.max(end, 'La fecha de inicio debe ser anterior a la fecha de fin')
    //     )
    //     .nullable()
    //     .required('Se requiere la fecha de inicio'),
    // end: Yup.date()
    //     .max(new Date(), 'La fecha no puede ser mayor o igual que la actual')
    //     .when(
    //         'start',
    //         (start, schema) =>
    //             start && schema.min(start, 'La fecha de fin debe ser posterior a la fecha de inicio')
    //     )
    //     .nullable()
    //     .required('Se requiere la fecha de fin')
});


export const AddexperienceSchema = Yup.object().shape({
    company: Yup.string().required('El campo institución es obligatorio'),
    puesto: Yup.string().required('El campo "Nombre de la carrera o diplomado" es obligatorio'),
    // start: Yup.date()
    //     .max(new Date(), 'La fecha no puede ser mayor o igual que la actual')
    //     .when(
    //         'end',
    //         (end, schema) =>
    //             end && schema.max(end, 'La fecha de inicio debe ser anterior a la fecha de fin')
    //     )
    //     .nullable()
    //     .required('Se requiere la fecha de inicio'),
    // end: Yup.date()
    //     .max(new Date(), 'La fecha no puede ser mayor o igual que la actual')
    //     .when(
    //         'start',
    //         (start, schema) =>
    //             start && schema.min(start, 'La fecha de fin debe ser posterior a la fecha de inicio')
    //     )
    //     .nullable()
    //     .required('Se requiere la fecha de fin')
});


export const ValidationSchemaProfileApplicant = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
    gender: Yup.string().oneOf(["Hombre", "Mujer", "Otro"], 'Género no válido'),
    email: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
    address: Yup.string(),
    phone: Yup.string().matches(/^\d+$/, 'Ingrese un número de teléfono válido'),
    website: Yup.string().url('Ingrese una URL válida para el sitio web'),
    linkedin: Yup.string().url('Ingrese una URL válida para LinkedIn'),
    description: Yup.string()
});

export const ValidationSchemaProfileCompany = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
    bussinesName: Yup.string().required('El nombre comercial es obligatorio'),
    address: Yup.string(),
    phone: Yup.string().matches(/^\d+$/, 'Ingrese un número de teléfono válido').required('El telefono es obligatorio'),
    email: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
    website: Yup.string().url('Ingrese una URL válida para el sitio web'),
    employesNumberMax: Yup.number().typeError('El campo debe ser un número').positive('Ingrese un número positivo'),
    employesNumberMin: Yup.number().typeError('El campo debe ser un número').positive('Ingrese un número positivo'),
    facebook: Yup.string().url('Ingrese una URL válida para Facebook'),
    twitter: Yup.string().url('Ingrese una URL válida para Twitter'),
    instagram: Yup.string().url('Ingrese una URL válida para Instagram'),
    linkedin: Yup.string().url('Ingrese una URL válida para LinkedIn'),
    sector: Yup.string().required('El sector es obligatorio'),
    description: Yup.string().required('El campo descripcion es obligatorio')
});

export const ValidationSchemaJob = Yup.object().shape({
    title: Yup.string().required('El título es obligatorio'),
    position: Yup.string().required('La posición es obligatoria'),
    term: Yup.string().required('El plazo es obligatorio'),
    limitMatches: Yup.number().typeError('El campo debe ser un número').required('El límite de coincidencias es obligatorio'),
    maximumSalary: Yup.number()
      .typeError('El campo debe ser un número')
      .required('El salario máximo es obligatorio')
      .moreThan(Yup.ref('minimumSalary'), 'El salario máximo debe ser mayor que el salario mínimo'),
    minimumSalary: Yup.number()
      .typeError('El campo debe ser un número')
      .required('El salario mínimo es obligatorio'),
    description: Yup.string().required('La descripción es obligatoria')
  });