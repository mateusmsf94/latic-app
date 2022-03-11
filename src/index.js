import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import "./styles.css";
import * as Yup from 'yup'

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ 
        nome: '', 
        data: '', 
        numProntuario: '',
        idade: '',
        sexo: '',
        escolaridade: '',
        altura: '',
        peso: '',
        imc: '',
        etiologiaIC:'',
        classificacaoCardiomiopatia: '',
        pressaoArterial: '',
        freqCardiaca: '',
        fazAtvFis: '',
        tabagista: '',
        etilismo: '',
        dispineia: '',


         }}
      validationSchema={Yup.object({
        nome: Yup.string()          
          .required('Campo Obrigatorio'),
        data: Yup.date()
          .required('Campo Obrigatorio'),
        numProntuario: Yup.number()
          .required('Campo Obrigatorio')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({values}) =>
        <Form>
        <label htmlFor="nome">Nome</label>
        <Field name="nome" type="text" />
        <ErrorMessage name="nome" />

        <label htmlFor="data">Data</label>
        <Field name="data" type="date" />
        <ErrorMessage name="data" />

        <label htmlFor="numProntuario">N prontuario</label>
        <Field name="numProntuario" type="number" />
        <ErrorMessage name="numProntuario" />

        <label htmlFor="idade">Idade</label>
        <Field name="idade" type="number" />
        <ErrorMessage name="idade" />

        <label>Idade</label>
          <div className="idade" role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="sexo" value="masculino" />
              Masculino
            </label>
            <label>
              <Field type="radio" name="sexo" value="feminino" />
              Feminino
            </label>           
          </div>

        



        

        <button type="submit">Submit</button>
      </Form>}
    </Formik>
  );
};
  
function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
