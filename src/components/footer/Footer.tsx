import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-primary text-white py-2 text-center mt-4 mb-4">
            {/* Logo/Nome da empresa */}
            <h2 className="font-bold mt-4 mb-6">Unibay</h2>

            {/* Informações de copyright */}
            <p>Unileya Educacional | Todos os direitos reservados.</p>

            {/* Links de redes sociais */}
            <div className="flex justify-center gap-2 mb-6">
                <a href="https://www.linkedin.com" className="cursor-pointer">
                    <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/" className="cursor-pointer">
                    <FaFacebookSquare />
                </a>
            </div>
        </div>
    )
}