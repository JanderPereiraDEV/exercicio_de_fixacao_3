import { useState } from "react";

const FeedBackForm = () => {

    const [dados, setDados] = useState({
        nome: "",
        email: "",
        comentario: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`
            Nome: ${dados.nome}
            Email: ${dados.email}
            Comentário: ${dados.comentario}
        `);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="content">
                        <label htmlFor="nome" >Nome</label>
                        <input 
                            id='nome' 
                            type='text' 
                            placeholder='Digite seu nome' 
                            value={dados.nome}
                            onChange={(e) => {
                                setDados({...dados, nome: e.target.value})
                            }}
                        />      
                    </div>
                    <div className="content">
                        <label htmlFor="email" >Email</label>
                        <input 
                            id='email' 
                            type='email' 
                            placeholder='email@email.com' 
                            value={dados.email}
                            onChange={(e) => {
                                setDados({...dados, email: e.target.value})
                            }}
                        />
                    </div>
                    <div className="content">
                        <label htmlFor="comentario" >Comentário</label>
                        <textarea 
                            id="comentario"
                            value={dados.comentario}
                            onChange={(e) => {
                                setDados({...dados, comentario: e.target.value})
                            }}
                        />
                    </div>
                    <button type="submit" className="content">Enviar</button>
                </form>
            </div>
        </>
    );
}
 
export default FeedBackForm;