import "./itemList.css";

const ItemList = (props) => {
    console.log("Estou renderizando!");
    return ( 
        <tr>
            <td>{props.id}</td>
            <td>{props.Titulo}</td>
            <td>{props.Autor}</td>
            <td>{props.Ano}</td>
            <td class="text-end">
                {Number(props.Preco).toLocaleString("pt-br",{minimumFractionDigits:2})}
                </td>
            <td class="text-center">
                <img src={props.Foto} alt="Capa do livro" width="75"/>
            </td>
            <td class="text-center">
                <i class="exclui text-danger fw-bold" title="Exclude">&#10008</i>
                <i class="altera text-success fw-bold ms-2" title="Change">&#36;</i>

            </td>
        </tr>
    );
}
export default ItemList;