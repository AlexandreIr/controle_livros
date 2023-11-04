import { useForm } from "react-hook-form";

const BookInclusion = () => {
    const { register, handleSubmit }= useForm();

    const save = (fields) =>{
        alert(JSON.stringify(fields))
    }    

    return ( 
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão</h4>
            <form onSubmit={handleSubmit(save)}>
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
            <div className="alert"></div>
        </div>
    );
}

export default BookInclusion;
