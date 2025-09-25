import { PropsWithChildren } from "react";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router";

// Tipagem do componente (pode ser removida se não utilizada)
type AuthTempaleteProps = PropsWithChildren & {}

export default function AuthTemplate(props: AuthTempaleteProps) {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex flex-col bg-slate-100">
            {/* Cabeçalho da aplicação */}
            <div className="bg-primary text-white flex justify-between py-2 px-8 items-center">
                {/* Logo/Título clicável - navega para home */}
                <button onClick={() => navigate("/")}>
                    <h1 className="text-[30px] font-bold">UnyBay</h1>
                </button>
            </div>

            {/* Área principal de conteúdo */}
            <div className="flex flex-1 flex-col px-28 py-8 max-6-xl mx-auto w-full justify-center">
                {props.children}
            </div>

            {/* Rodapé da aplicação */}
            <Footer />
        </div>
    )
}