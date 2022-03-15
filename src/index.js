import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import "./styles.css";
import * as Yup from 'yup'
import MySelect from "./components/MySelect";

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
        classificacaoFuncional: '',
        estagioIC: '',
        pressaoArterial: '',
        freqCardiaca: '',
        fazAtvFis: '',
        tabagista: '',
        etilismo: '',
        dispineia: '',
        dispParNoturna: '',
        palpitacoes: '',
        outrasManifestacoes: '',
        dm: '',
        has: '',
        dlp: '',
        dpoc: '',
        


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
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="sexo" value="masculino" />
              Masculino
            </label>
            <label>
              <Field type="radio" name="sexo" value="feminino" />
              Feminino
            </label>           
          </div>

        <MySelect label="Escolaridade" name="escolaridade">
          <option value="">Selecione o nivel de escolaridade</option>
          <option value="Fundamental - Incompleto">Fundamental - Incompleto</option>
          <option value="Fundamental - Completo">Fundamental - Completo</option>
          <option value="Médio - Incompleto">Médio - Incompleto</option>
          <option value="Médio - Completo">Médio - Completo</option>
          <option value="Superior - Incompleto">Superior - Incompleto</option>
          <option value="Superior - Completo">Superior - Completo</option>
          <option value="other">Other</option> 
        </MySelect>

        <label htmlFor="altura">Altura (em cm)</label>
        <Field name="altura" type="number" />
        <ErrorMessage name="altura" />

        <label htmlFor="peso">Peso (em kg)</label>
        <Field name="peso" type="number" />
        <ErrorMessage name="peso" />

        <label htmlFor="imc">IMC</label>
        <Field name="imc" type="number" value={ (values.peso / (values.altura / 100) ** 2).toFixed(2)} />
        <ErrorMessage name="altura" />

        <MySelect label="Etiologia IC" name="etiologiaIC">
          <option value="">Classicacao</option>
          <option value="Isquemica">Isquemica</option>
          <option value="Hipertensiva">Hipertensiva</option>
          <option value="Chagásica">Chagásica</option>
          <option value="Valvar">Valvar</option>
          <option value="Cardiomiopatia">Cardiomiopatia</option>
          <option value="Congenita">Congenita</option>
          <option value="Cardiotoxicidade">Cardiotoxicidade</option> 
          <option value="Alcóolica">Alcóolica</option>
          <option value="Doencas extracardiacas">Doencas extracardiacas</option>
          <option value="Taquicardiomiopatia">Taquicardiomiopatia</option>
          <option value="Miocardites">Miocardites</option>
          <option value="Periparto">Periparto</option>
        </MySelect>

        {values.etiologiaIC === "Cardiomiopatia" ? 
        <MySelect label="Cardiomiopatia" name="classificacaoCardiomiopatia">
          <option value="">Classicacao</option>
          <option value="Dilatado Idiopatica">Dilatado Idiopatica</option>
          <option value="Miocárdio NC">Miocárdio NC</option>
          <option value="CAVD">CAVD</option>
          <option value="Hipertrófica">Hipertrófica</option>
          <option value="Restritiva">Restritiva</option>
        </MySelect> : null} 

        <MySelect label="Classificação funcional" name="classificacaoFuncional">
          <option value="">Classicacao</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>          
        </MySelect>

        <MySelect label="Estagio da IC" name="estagioIC">
          <option value="">Classicacao</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>          
        </MySelect>

        <label htmlFor="pressaoArterial">Pressão Arterial</label>
        <Field name="pressaoArterial" type="text" />
        <ErrorMessage name="pressaoArterial" />

        <label htmlFor="freqCardiaca">N prontuario</label>
        <Field name="freqCardiaca" type="number" />
        <ErrorMessage name="freqCardiaca" />

        <label>Pratica Atividade</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="fazAtvFis" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="fazAtvFis" value="nao" />
              Nao
            </label>           
          </div>

          <label>Etilismo</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="etilismo" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="etilismo" value="nao" />
              Nao
            </label>           
          </div>

          <label>Tabagismo</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="tabagista" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="tabagista" value="nao" />
              Nao
            </label>           
          </div>

          <label>Dispneia</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="despneia" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="despneia" value="nao" />
              Nao
            </label>           
          </div>

          <label>Dispneia paroxística noturna</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="dispParNoturna" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="dispParNoturna" value="nao" />
              Nao
            </label>           
          </div>

          <label>Tabagismo</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="tabagista" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="tabagista" value="nao" />
              Nao
            </label>           
          </div>

          <label>Tabagismo</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="tabagista" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="tabagista" value="nao" />
              Nao
            </label>           
          </div>

          <label>Tabagismo</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="tabagista" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="tabagista" value="nao" />
              Nao
            </label>           
          </div>

          <label>Tabagismo</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="tabagista" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="tabagista" value="nao" />
              Nao
            </label>           
          </div>

          <label>Tabagismo</label>
          <div role="group" aria-labelledby="select-idade">
            <label>
              <Field type="radio" name="tabagista" value="sim" />
              Sim
            </label>
            <label>
              <Field type="radio" name="tabagista" value="nao" />
              Nao
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
