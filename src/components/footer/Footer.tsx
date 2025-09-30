import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <div className="bg-primary text-white py-2 text-center mt-4 mb-4">
            {/* Logo/Nome da empresa */}
            <h2 className="font-bold mt-4 mb-6">Unibay</h2>

            {/* Informações de copyright */}
            <p>Unileya Educacional | Todos os direitos reservados.</p>

            {/* Links de redes sociais e contato */}
            <div className="flex justify-center gap-4 mb-6 mt-4 items-center">
                <a
                    href="https://www.linkedin.com"
                    className="cursor-pointer hover:text-gray-200 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={20} />
                </a>
                <a
                    href="https://www.facebook.com/"
                    className="cursor-pointer hover:text-gray-200 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookSquare size={20} />
                </a>
                <a
                    href="/contact"
                    className="cursor-pointer hover:text-gray-200 transition-colors duration-200 flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoMailOutline size={20} />
                    <span className="text-sm">Fale Conosco</span>
                </a>
            </div>
        </div>
    )
}