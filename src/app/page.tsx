'use client';

import Image from "next/image";
import './form.css';
import {useState} from 'react';

export default function Home() {
  let [log,SetLog] = useState(true);
  let toggleForm = (value : boolean) =>{
    SetLog(value);
  }
  return (
    <main>
      <div className="LinkNav Nav">
        <div className="connection a" onClick={()=>toggleForm(true)}>Connection</div>
        <div className="espace"></div>
        <div className="inscription a" onClick={()=>toggleForm(false)}>Inscription</div>
      </div>
      <div className="formNav Nav">
        <div className={`Connection point ${ log ? "active" : ""}`}></div>
        <div className="ligne"></div>
        <div className={`Inscription point ${log ? "" : "active"}`}></div>
      </div>
      <form>
        <legend>{log ? "SE CONNECTER" : "CREER VOTRE COMPTE"}</legend>
        <div className="input">
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
          <input type="password" placeholder="Mot de passe"/>
        </div>
        {!log && 
          <div className="input">
            <input type="password" placeholder="Confirmation"/>
          </div>}
        <button type="submit">{log ? "Se connecter" : "Confirmer"}</button>
      </form>
    </main>
  );
}
