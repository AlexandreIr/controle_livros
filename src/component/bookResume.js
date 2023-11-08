import { useEffect, useState } from "react";
import { inAxios } from "../config_axios";
import Chart from "react-google-charts";

const BookResume = () => {

    const [resume, setResume]=useState([]);
    const [grafico, setGrafico]=useState([]);

    const getData=async()=>{
        try{
            const dataResume=await inAxios.get("books/data/resume");
            setResume(dataResume.data);

            const dataGraphic=await inAxios.get("books/data/graphic");
            const arrayGraphic=[["Ano", "R$ Total"]];

            dataGraphic.data.map((data)=>{
                arrayGraphic.push([data.Ano.toString(), data.total])
            })
            setGrafico(arrayGraphic);
        }catch(err){
            alert(`Erro... não foi possível obter os dados: ${err.message}`);
            console.log(err.message)
        }
    };

    useEffect(()=>{
        getData();
    },[]);
    return ( 
        <div className="container">
            <h4 className="mt-3">Resumo</h4>
            <span className="btn btn-outline-primary btn-lg">
                <p className="badge bg-danger">{resume.num}</p>
                <p>Nº de livros cadastrados</p>
            </span>
            <span className="btn btn-outline-primary btn-lg mx-2">
                <p className="badge bg-danger">
                    {Number(resume.soma).toLocaleString("pt-br", {minimumFractionDigits:2})}
                </p>
                <p>Total investido em livros</p>
            </span>
            <span className="btn btn-outline-primary btn-lg me-2">
                <p className="badge bg-danger">
                    {Number(resume.maior).toLocaleString("pt-br",{minimumFractionDigits:2})}
                </p>
                <p>Maior preço cadastrado</p>
            </span>
            <span className="btn btn-outline-primary btn-lg">
                <p className="badge bg-danger">
                    {Number(resume.media).toLocaleString("pt-br", {minimumFractionDigits:2})}
                </p>
                <p>Preço Médio dos livros</p>
            </span>

            <div className="d-flex justify-content-center mt-3">
                <Chart
                    width={1000}
                    height={420}
                    chartType="ColumnChart"
                    loader={<div>Carregando Gráficos...</div>}
                    data={grafico}
                    options={{
                        title:"Total investido em livros - por Ano de publicação",
                        chartArea:{width:"80%"},
                        hAxis:{title:"Ano de publicação"},
                        vAxis:{title:"Preço acumulado R$"},
                        legend:{position:"none"}
                    }}
                />
            </div>
        </div>
    );
}

export default BookResume;