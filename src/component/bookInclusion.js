import { useState } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";

const BookInclusion = () => {
    const { register, handleSubmit, reset }= useForm();
    
    const [warning, setWarning]=useState("");

    const save = async (fields) =>{
        try{
            const response = await inAxios.post("books", fields);
            setWarning(`OK! Livro cadastrado com código ${response.data.id}`);
        } catch (err){
            setWarning(`Erro! Livro não cadastrado: ${err}`);
        }

        setTimeout(()=>{
            setWarning("");
        }, 5000);

        reset({Titulo:"", Autor:"", Foto:"", Ano:"", Preco:""});
    }    

    return ( 
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão</h4>
            <form onSubmit={handleSubmit(save)} className="mb-3">
                <div className="form-group">
                    <label htmlFor="Titulo">Título:</label>
                    <input type="text" className="form-control" id="Titulo" required
                        autoFocus {...register("Titulo")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="Autor">Autor:</label>
                    <input type="text" className="form-control" id="Autor" required {...register("Autor")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="Foto">URL da foto:</label>
                    <input type="text" className="form-control" id="Foto" required {...register("Foto")}/>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="Ano">Ano de Publicação:</label>
                            <input type="number" className="form-control" id="Ano" required {...register("Ano")}/>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="number" className="form-control" id="Preco" step="0.1" required {...register("Preco")}/>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-3 me-3" value="Enviar"/>
                <input type="reset" className="btn btn-danger mt-3 " value="Limpar"/>
            </form>
            <div className={warning.startsWith("Oks")?"alert alert-success":warning.startsWith("Erro")?"alert alert-danger":""}>{warning}</div>
        </div>
    );
}

export default BookInclusion;
