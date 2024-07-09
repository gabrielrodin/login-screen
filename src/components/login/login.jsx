import React from "react";
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from "react";
import "./login.css";
import Atropos from "atropos/react";
import "atropos/css";



const Login = () => {
   const myAtropos = Atropos({
      el: ".my-atropos"
   })

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();

      alert("Enviando os dados: " + username + " - " + password)
   };

   return (
      <Atropos shadow={false} className="my-atropos">
         <div className="container">

            <form onSubmit={handleSubmit}>
               <h1>Acesse o seu perfil!</h1>
               <div className="input-field">
                  <input type="email" placeholder="E-mail"
                     onChange={(e) => setUsername(e.target.value)} />
                  <FaUser className="icon" />
               </div>
               <div className="input-field">
                  <input type="password" placeholder="Senha"
                     onChange={(e) => setPassword(e.target.value)} />
                  <FaLock className="icon" />
               </div>
               <div className="recall-forget">
                  <label>
                     <input type="checkbox" />Lembre de mim
                  </label>
                  <a href="#">Esqueceu a senha?</a>
               </div>

               <button>Entrar</button>
               <div className="signup-link">
                  <p>Não tem uma conta? <a href="#">Registrar</a></p>
               </div>
            </form>

         </div>
      </Atropos>
   )
}

export default Login;