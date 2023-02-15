import React, { useState } from 'react';
import "./Formulario.css"

function Formulario() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('');

    function handleNomeChange(event) {
        setNome(event.target.value);
    }

    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleMensagemChange(event) {
        setMensagem(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Nome: ${nome}, Telefone: ${telefone}, Mensagem: ${mensagem}, Email:${email}`);
    }

    return (

        <div className='formulario'>
            <div className='formulario-card'>
                <form onSubmit={handleSubmit}>
                    <div className='formulario-item'>
                        <label>
                            Nome:
                            <input type="text" value={nome} onChange={handleNomeChange} />
                        </label>
                    </div>
                    <div className='formulario-item'>
                        <label>
                            Telefone:
                            <input type="text" value={telefone} onChange={handleTelefoneChange} />
                        </label>
                    </div>
                    <div className='formulario-item'>
                        <label>
                            Email:
                            <input type="text" value={email} onChange={handleEmailChange} />
                        </label>
                    </div>
                    <div className='formulario-item'>
                        <label>
                            Mensagem:
                            <textarea value={mensagem} onChange={handleMensagemChange} />
                        </label>
                    </div>

                    <div className='formulario-item'>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Formulario;