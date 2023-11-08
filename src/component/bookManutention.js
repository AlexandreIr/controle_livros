import { useEffect, useState } from "react";
import { inAxios } from "../config_axios";
import ItemList from "./itemList";
import { useForm } from "react-hook-form";

const BookManutention = () => {
    const [ books , setBooks]=useState([]);
    const {register, handleSubmit, reset}=useForm();

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

    const listFilter = async (fields)=>{
        try{
            const list = await inAxios.get(`/books/filtro/${fields.word}`);
            list.data.length
                ?setBooks(list.data)
                :alert("Não há livros com a palavra pesquisada!");
        }catch(err){
            alert(`Erro! Não foi possível obter os dados ${err}`);
        }
    };

    const exclude = async(id, title)=>{
        if(!window.confirm(`Deseja realmente excluir "${title}"?`)){
            return;
        }
        try{
            await inAxios.delete(`books/${id}`);
            setBooks(books.filter((book)=>book.id!==id));
        }catch(err){
            alert(`Erro! não foi possível excluir este livro ${err}`);
        }
    };

    const changePrice = async(id, title, index)=>{
        const newPrice= Number(prompt(`Digite o novo valor de "${title}"`))
        if(isNaN(newPrice) || newPrice===0){
            return;
        }
        
        try{
            await inAxios.put(`/books/${id}`, {preco: newPrice});
            const changingBooks=[...books]
            changingBooks[index].Preco=newPrice;
            setBooks(changingBooks);
        }catch(err){
            alert(`Erro! não foi possível alterar o preço deste livro ${err}`);
            console.log(err.response.data);
        }
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="fst-italic mt-3">Manutenção</h4>
                </div>
                <div className="col-sm-5">
                    <form onSubmit={handleSubmit(listFilter)}>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" 
                            placeholder="Título ou autor" id="query" required {...register("word")}/>
                            <input type="submit" className="btn btn-primary" value="Pesquisar"/>
                            <input type="button" className="btn btn-success" value="Todos"
                            onClick={()=>{reset({word:""}); getBooks();}}/>
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
                        <th>Preço(R$)</th>
                        <th>Foto</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index)=>(
                        <ItemList key={book.id} id={book.id} Titulo={book.Titulo}
                        Autor={book.Autor} Ano={book.Ano} Preco={book.Preco}
                        Foto={book.Foto} excludeClick={()=>exclude(book.id, book.Titulo)} 
                        changeClick={()=>changePrice(book.id, book.Titulo, index)}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default BookManutention;