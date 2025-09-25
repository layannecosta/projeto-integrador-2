import { Link, useNavigate } from "react-router-dom";

export default function Header() {
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

                {/* Botão de login/acesso */}
                <li>
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-secundary px-8 py-2 rounded-md hover:bg-secundary/90 transition-colors duration-200">Entrar</button>
                </li>
            </ul>
        </div>
    )
}