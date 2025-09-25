import { useState } from "react";
import { useNavigate } from "react-router";

type LoginForm = {
    email: string;
    password: string;
}

export default function Login() {

    const [formData, setFormData] = useState<LoginForm>({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState<Partial<LoginForm>>({});

    // Função de validação simples
    const validateForm = (): boolean => {
        const newErrors: Partial<LoginForm> = {};

        // Validação do email
        if (!formData.email) {
            newErrors.email = "O campo é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Digite um email válido";
        }

        // Validação da senha
        if (!formData.password) {
            newErrors.password = "O campo é obrigatório";
        } else if (formData.password.length < 4) {
            newErrors.password = "A senha precisa ter pelo menos 4 caracteres";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Função para lidar com mudanças nos inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Limpar erro do campo quando o usuário começar a digitar
        if (errors[name as keyof LoginForm]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    // Função de submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Dados do login:", formData);
            // Aqui você pode adicionar a lógica de autenticação
            alert("Login realizado com sucesso!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                {/* Container principal */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Header colorido */}
                    <div className="bg-gradient-to-r from-primary to-primary/90 px-8 py-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>

                        <div className="relative z-10">
                            <h1 className="text-white font-bold text-3xl mb-2">Unybay</h1>
                            <p className="text-white/90 text-lg">Acesse sua conta</p>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="px-8 py-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Campo Email */}
                            <div className="space-y-2">
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-200 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-primary focus:outline-none transition-all duration-200"
                                    placeholder="Digite seu E-mail"
                                />
                                {errors.email && (
                                    <span className="text-red-600 text-sm">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            {/* Campo Senha */}
                            <div className="space-y-2">
                                <input
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-200 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-primary focus:outline-none transition-all duration-200"
                                    placeholder="Digite sua senha"
                                />
                                {errors.password && (
                                    <span className="text-red-600 text-sm">
                                        {errors.password}
                                    </span>
                                )}
                            </div>

                            {/* Botão de Login */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white h-[40px] rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Entrar
                            </button>
                        </form>

                        {/* Link Criar Cadastro */}
                        <div className="text-center mt-6">
                            <a href="/register" className="text-primary hover:text-primary/80 font-medium transition-colors duration-200">
                                Criar cadastro
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}