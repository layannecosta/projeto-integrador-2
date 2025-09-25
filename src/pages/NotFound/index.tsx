import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-1 justify-center items-center px-4">

            <div className="text-center space-y-6">
                <h1 className="text-8xl font-bold text-transparent bg-gradient-to-r from-primary to-secundary bg-clip-text">
                    404
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secundary mx-auto rounded-full"></div>

                {/* Mensagem*/}
                <h2 className="text-2xl font-bold text-gray-800">Página não encontrada</h2>

                {/* Botão para voltar */}
                <div className="pt-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mx-auto"
                    >
                        <IoArrowBack className="text-xl" />
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    )
}