import { useState } from "react";

type RegisterForm = {
    nome: string;
    email: string;
    telefone: string;
    cidade: string;
    estado: string;
    senha: string;
}

export default function Register() {
    const [formData, setFormData] = useState<RegisterForm>({
        nome: "",
        email: "",
        telefone: "",
        cidade: "",
        estado: "",
        senha: ""
    });

    const [errors, setErrors] = useState<Partial<RegisterForm>>({});

    // Lista de estados brasileiros
    const estados = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
        "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
        "RS", "RO", "RR", "SC", "SP", "SE", "TO"
    ];

    // Função de validação
    const validateForm = (): boolean => {
        const newErrors: Partial<RegisterForm> = {};

        // Validação do nome
        if (!formData.nome.trim()) {
            newErrors.nome = "O nome é obrigatório";
        } else if (formData.nome.trim().length < 2) {
            newErrors.nome = "O nome deve ter pelo menos 2 caracteres";
        }

        // Validação do email
        if (!formData.email) {
            newErrors.email = "O email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Digite um email válido";
        }

        // Validação do telefone
        if (!formData.telefone.trim()) {
            newErrors.telefone = "O telefone é obrigatório";
        } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.telefone)) {
            newErrors.telefone = "Digite um telefone válido (xx) xxxxx-xxxx";
        }

        // Validação da cidade
        if (!formData.cidade.trim()) {
            newErrors.cidade = "A cidade é obrigatória";
        } else if (formData.cidade.trim().length < 2) {
            newErrors.cidade = "A cidade deve ter pelo menos 2 caracteres";
        }

        // Validação do estado
        if (!formData.estado) {
            newErrors.estado = "O estado é obrigatório";
        }

        // Validação da senha
        if (!formData.senha) {
            newErrors.senha = "A senha é obrigatória";
        } else if (formData.senha.length < 6) {
            newErrors.senha = "A senha deve ter pelo menos 6 caracteres";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Função para formatar telefone automaticamente
    const formatTelefone = (value: string): string => {
        const numbers = value.replace(/\D/g, "");

        if (numbers.length <= 2) {
            return numbers;
        } else if (numbers.length <= 6) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        } else if (numbers.length <= 10) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
        } else {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
        }
    };

    // Função para lidar com mudanças nos inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        let formattedValue = value;

        // Formatação especial para telefone
        if (name === "telefone") {
            formattedValue = formatTelefone(value);
        }

        setFormData(prev => ({
            ...prev,
            [name]: formattedValue
        }));

        // Limpar erro do campo quando o usuário começar a digitar
        if (errors[name as keyof RegisterForm]) {
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
            console.log("Dados do cadastro:", formData);
            alert("Cadastro realizado com sucesso!");

            // Resetar formulário após sucesso
            setFormData({
                nome: "",
                email: "",
                telefone: "",
                cidade: "",
                estado: "",
                senha: ""
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-2xl">
                {/* Container principal */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Header colorido */}
                    <div className="bg-gradient-to-r from-primary to-primary/90 px-8 py-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>

                        <div className="relative z-10">
                            <h1 className="text-white font-bold text-3xl mb-2">Criar Conta</h1>
                            <p className="text-white/90 text-lg">Faça parte da nossa comunidade</p>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="px-8 py-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Grid para campos em linha */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Campo Nome */}
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-gray-700 font-medium">Nome Completo *</label>
                                    <input
                                        name="nome"
                                        type="text"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-gray-200 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-primary focus:outline-none transition-all duration-200"
                                        placeholder="Digite seu nome completo"
                                    />
                                    {errors.nome && (
                                        <span className="text-red-600 text-sm">{errors.nome}</span>
                                    )}
                                </div>

                                {/* Campo Email */}
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium">E-mail *</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-gray-200 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-primary focus:outline-none transition-all duration-200"
                                        placeholder="Digite seu e-mail"
                                    />
                                    {errors.email && (
                                        <span className="text-red-600 text-sm">{errors.email}</span>
                                    )}
                                </div>

                                {/* Campo Telefone */}
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium">Telefone *</label>
                                    <input
                                        name="telefone"
                                        type="tel"
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                        maxLength={15}
                                        className="w-full border-2 border-gray-200 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-primary focus:outline-none transition-all duration-200"
                                        placeholder="(11) 99999-9999"
                                    />
                                    {errors.telefone && (
                                        <span className="text-red-600 text-sm">{errors.telefone}</span>
                                    )}
                                </div>

                                {/* Campo Cidade */}
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium">Cidade *</label>
                                    <input
                                        name="cidade"
                                        type="text"
                                        value={formData.cidade}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-gray-200 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-primary focus:outline-none transition-all duration-200"
                                        placeholder="Digite sua cidade"
                                    />
                                    {errors.cidade && (
                                        <span className="text-red-600 text-sm">{errors.cidade}</span>
                                    )}
                                </div>

                                {/* Campo Estado */}
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium">Estado *</label>
                                    <select
                                        name="estado"
                                        value={formData.estado}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-gray-200 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-primary focus:outline-none transition-all duration-200"
                                    >
                                        <option value="">Selecione o estado</option>
                                        {estados.map((estado) => (
                                            <option key={estado} value={estado}>
                                                {estado}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.estado && (
                                        <span className="text-red-600 text-sm">{errors.estado}</span>
                                    )}
                                </div>

                                {/* Campo Senha */}
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-gray-700 font-medium">Senha *</label>
                                    <input
                                        name="senha"
                                        type="password"
                                        value={formData.senha}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-gray-200 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-primary focus:outline-none transition-all duration-200"
                                        placeholder="Digite sua senha (mínimo 6 caracteres)"
                                    />
                                    {errors.senha && (
                                        <span className="text-red-600 text-sm">{errors.senha}</span>
                                    )}
                                </div>
                            </div>

                            {/* Botão de Cadastro */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white h-[45px] rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Cadastrar
                            </button>
                        </form>

                        {/* Link para Login */}
                        <div className="text-center mt-6">
                            <p className="text-gray-600">
                                Já possui uma conta?{" "}
                                <a href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors duration-200">
                                    Fazer login
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}