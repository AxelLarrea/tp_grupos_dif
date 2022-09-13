import React, { useEffect, useState } from 'react'
import Subscripcion from './Subscripcion';

const Chat = () => {

    const [canales, setCanales] = useState([]);

    const [message, setMessage] = useState({
        canal: '',
        mensaje: ''
    })

    const cargarCanales = async () => {
        const response = await fetch("http://localhost:4000/activos");
        const data = await response.json();
        setCanales(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch(`http://localhost:4000/publicar`, {
            method: "POST",
            body: JSON.stringify(message),
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json();
        console.log('Respuesta de envío de mensaje: ', data);
    }

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }

    console.log('Mensaje: ',message);

    useEffect(() => {
        cargarCanales();
    }, []);

    return (
        <>
            <div className="chat-container">
                <Subscripcion/>
                <form className="message-form" onSubmit={handleSubmit}>
                    <label>Canal</label>
                    <select onChange={ (e) => { setMessage({ ...message, canal: e.target.value})}}>
                        <option value="">Seleccione el canal</option>
                        {canales && canales.map( canal => <option value={`${canal}`} name="canal" key={canal}>{canal}</option>)}
                    </select>
                    <textarea name="mensaje" required onChange={handleChange}></textarea>
                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>
        </>
    );
}
 
export default Chat;