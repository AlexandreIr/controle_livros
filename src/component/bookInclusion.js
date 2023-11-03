const BookInclusion = () => {
    return ( 
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input type="text" className="form-control" id="title" required
                        autoFocus/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="author">Autor:</label>
                    <input type="text" className="form-control" id="author" required/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="photo">URL da foto:</label>
                    <input type="text" className="form-control" id="photo" required/>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="year">Ano de Publicação:</label>
                            <input type="number" className="form-control" id="year" required/>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="price">Preço:</label>
                            <input type="number" className="form-control" id="price" step="0.1" required/>
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
