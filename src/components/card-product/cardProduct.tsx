import img_product from "../../assets/product.png"
import { IoHeartOutline, IoHeart } from "react-icons/io5"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CardProduct() {
    const [isFavorite, setIsFavorite] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="group relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 w-full max-w-sm">


            {/* Botão de favorito */}
            <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all duration-200 z-10 group/heart"
            >
                {isFavorite ? (
                    <IoHeart className="text-red-500 text-lg group-hover/heart:scale-110 transition-transform duration-200" />
                ) : (
                    <IoHeartOutline className="text-gray-600 text-lg group-hover/heart:scale-110 transition-transform duration-200" />
                )}
            </button>

            {/* Container da imagem */}
            <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center min-h-[180px]">
                <img
                    className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                    src={img_product}
                    alt="Produto"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Conteúdo do card */}
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                    <h1 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-primary transition-colors duration-200">
                        Nome do Produto
                    </h1>
                </div>

                {/* Preço */}
                <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">R$ 799,99</p>
                </div>

                {/* Botões de ação */}
                <div className="pt-3 space-y-2">
                    <button
                        onClick={() => navigate("/products/details")}
                        className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                        Ver Detalhes
                    </button>

                    <button className="w-full border-2 border-secundary text-secundary hover:bg-secundary hover:text-white py-2 rounded-lg font-semibold transition-all duration-200">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>

            {/* Indicador de frete grátis */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    )
}