import React from "react";
import Produto from "./model/Produto";




interface CarrinhoContextInterface{
    carrinho:Array<Produto>;
    adicionarCarrinho: (produto:Produto)=>void;
}


const CarrinhoContext = React.createContext<CarrinhoContextInterface>({
    carrinho:[],
    adicionarCarrinho: (produto:Produto)=>{ }
});








export default CarrinhoContext;