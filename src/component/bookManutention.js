import { useEffect, useState } from "react";
import { inAxios } from "../config_axios";
import ItemList from "./itemList";

const BookManutention = () => {
    const [ books , setBooks]=useState([]);

    const getBooks = async ()=>{
        try{
            const list = await inAxios.get("books");
            setBooks(list.data);
        } catch (err){
            alert(`Erro! não foi possível obter os dados: ${err}`);
        }
    };

    useEffect(()=>{
        getBooks();
    }, []);

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="fst-italic mt-3">Manutenção</h4>
                </div>
                <div className="col-sm-5">
                    <form>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Título oo autor" id="query" required/>
                            <input type="submit" className="btn btn-danger" value="Todos"/>
                        </div>
                    </form>
                </div>
            </div>

            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Cód</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ano</th>
                        <th>Preço</th>
                        <th>Foto</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book)=>{
                        <ItemList key={book.id} id={book.id} titulo={book.Titulo}
                        autor={book.Autor} ano={book.Ano} preco={book.Preco}
                        foto={book.Foto} />
                    })}
                </tbody>
            </table>
        </div>
    );
}
 
export default BookManutention;