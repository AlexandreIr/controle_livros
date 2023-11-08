import "./itemList.css";

const ItemList = (props) => {
    return ( 
        <tr>
            <td>{props.id}</td>
            <td>{props.Titulo}</td>
            <td>{props.Autor}</td>
            <td>{props.Ano}</td>
            <td className="text-end">
                {`R$ ${Number(props.Preco).toLocaleString("pt-br",{minimumFractionDigits:2})}`}
                </td>
            <td className="text-center">
                <img src={props.Foto} alt="Capa do livro" width="75"/>
            </td>
            <td className="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={props.excludeClick}>&#10008;</i>
                <i className="altera text-success fw-bold ms-2" title="Modificar" onClick={props.changeClick}>&#36;</i>

            </td>
        </tr>
    );
}
export default ItemList;