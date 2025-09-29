import { Link, useNavigate } from "react-router-dom";

export default function HeaderAdmin() {
    const navigate = useNavigate();

    return (
        <div className="bg-primary text-white flex justify-between py-2 px-8 items-center">
            {/* Logo/Título clicável - navega para home */}
            <button onClick={() => navigate("/")}>
                <h1 className="text-[30px] font-bold">UnyBay</h1>
            </button>

            {/* Menu de navegação */}
            <ul className="flex gap-8 items-center">
                {/* Link para página inicial */}
                <li>
                    <Link to="/" className="hover:text-gray-200 transition-colors duration-200">Home</Link>
                </li>

                {/* Link para página Quem Somos */}
                <li>
                    <Link to="/about" className="hover:text-gray-200 transition-colors duration-200">Quem Somos</Link>
                </li>

                {/* Botão de logout */}
                <li>
                    <button
                        onClick={() => navigate("/#")}
                        className="hover:text-gray-200 transition-colors duration-200">
                        Sair
                    </button>
                </li>

                {/* Botão de criar anúncio */}
                <li>
                    <button
                        onClick={() => navigate("/form-products")}
                        className="bg-white text-secundary px-8 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200">
                        Anunciar
                    </button>
                </li>
            </ul>
        </div>
    )
}