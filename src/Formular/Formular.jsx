import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const validateForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email je povinný';
    console.log('som tu');
  } else if (values.email.length > 30) {
    errors.email = 'Email může mít max. 30 znaků.';
  }

  if (!values.password) {
    errors.password = 'Heslo je povinné';
  } else if (values.password.length > 50) {
    errors.password = 'Heslo může mít max. 30 znaků.';
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Potvrzení hesla je povinné';
  } else if (values.passwordConfirm.length > 50) {
    errors.passwordConfirm = 'Potvrzení hesla může mít max. 50 znaků.';
  }

  if (!values.phone) {
    errors.phone = 'Telefonní kontak je povinný';
  } else if (values.phone.length > 20) {
    errors.phone = 'Telefon může mít max. 20 znaků.';
  }

  if (values.name.length > 40) {
    errors.name = 'Jméno/název firmy může mít max. 40 znaků.';
  }

  if (values.street.length > 30) {
    errors.street = 'Ulice může mít max. 30 znaků.';
  }

  if (values.city.length > 20) {
    errors.city = 'Město může mít max.20 znaků.';
  }
  if (values.postalCode.length > 6) {
    errors.postalCode = 'PSČ může mít max.6 znaků.';
  }

  if (values.note.length > 100) {
    errors.note = 'Poznámka může mít max.100 znaků.';
  }

  if (!values.agreement) {
    errors.agreement = 'Bez souhlasu Vás nemůžeme registrovat.';
  }

  return errors;
};

const Formular = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        name: '',
        street: '',
        city: '',
        postalCode: '',
        pickUpPoint: '',
        note: '',
        agreement: false,
      }}
      validate={validateForm}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <h3>Registrační údaje:</h3>
        <div>
          <label htmlFor="email">email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="p" />
        </div>
        <div>
          <label htmlFor="password">heslo</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" />
        </div>
        <div>
          <label htmlFor="passwordConfirm">potvrďte heslo</label>
          <Field name="passwordConfirm" type="password" />
          <ErrorMessage name="passwordConfirm" component="p" />
        </div>
        <div>
          <label htmlFor="phone">telefon</label>
          <Field name="phone" type="phone" />
          <ErrorMessage name="phone" component="p" />
        </div>
        <h3>Fakturační údaje:</h3>
        <div>
          <label htmlFor="name" placeholder="jméno a přijmení nebo název firmy">
            jméno
          </label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="p" />
        </div>
        <div>
          <label htmlFor="street">ulice</label>
          <Field name="street" type="text" />
          <ErrorMessage name="street" component="p" />
        </div>
        <div>
          <label htmlFor="city">město</label>
          <Field name="city" type="city" />
          <ErrorMessage name="city" component="p" />
        </div>
        <div>
          <label htmlFor="postalCode">PSČ</label>
          <Field name="postalCode" type="text" />
          <ErrorMessage name="postalCode" component="p" />
        </div>
        <h4>další:</h4>
        <div>
          <label htmlFor="pickUpPoint">preferované odběrné místo</label>
          <Field name="pickUpPoint" component="select" id="pickUpPoint">
            <option value="Praha">Praha</option>
            <option value="Brno">Brno</option>
            <option value="Ostrava">Ostrava</option>
            <option value="Karlovy vary">Karlovy Vary</option>
            <option value="Olomouc">Olomouc</option>
          </Field>
          <ErrorMessage name="pickUpPoint" component="p" />
        </div>
        <div>
          <label htmlFor="newsletter">Chcete odoběrat newsletr?</label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="newsletter" value="yes" />
              Ano
            </label>
            <label>
              <Field type="radio" name="newsletter" value="no" />
              Ne
            </label>
          </div>
          <ErrorMessage name="newsletter" component="p" />
        </div>
        <div>
          <label htmlFor="postal code">PSČ</label>
          <Field name="postal code" type="number" />
          <ErrorMessage name="postal code" component="p" />
        </div>
        <div>
          <label htmlFor="note">poznámka</label>
          <Field name="note" as="textarea" />
          <ErrorMessage name="note" component="p" />
        </div>
        <div>
          <label htmlFor="agreement">
            souhlas se zpracováním osobních údajů
          </label>
          <Field name="agreement" type="checkbox" />
          <ErrorMessage name="agreement" component="p" />
        </div>
        <button type="submit">Odeslat údaje</button>
      </Form>
    </Formik>
  );
};

export default Formular;
