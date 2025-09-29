import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type RegisterForm = {
    nome: string;
    email: string;
    telefone: string;
    cidade: string;
    estado: string;
    senha: string;
}

// Schema de validação com Yup
const schema = yup.object().shape({
    nome: yup
        .string()
        .required("O nome é obrigatório")
        .min(2, "O nome deve ter pelo menos 2 caracteres")
        .max(100, "O nome deve ter no máximo 100 caracteres")
        .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "O nome deve conter apenas letras"),

    email: yup
        .string()
        .required("O email é obrigatório")
        .email("Digite um email válido")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Digite um email válido"),

    telefone: yup
        .string()
        .required("O telefone é obrigatório")
        .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Digite um telefone válido (xx) xxxxx-xxxx"),

    cidade: yup
        .string()
        .required("A cidade é obrigatória")
        .min(2, "A cidade deve ter pelo menos 2 caracteres")
        .max(100, "A cidade deve ter no máximo 100 caracteres"),

    estado: yup
        .string()
        .required("O estado é obrigatório")
        .oneOf(
            ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
            "Selecione um estado válido"
        ),

    senha: yup
        .string()
        .required("A senha é obrigatória")
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .max(50, "A senha deve ter no máximo 50 caracteres")
});

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch
    } = useForm<RegisterForm>({
        resolver: yupResolver(schema) as any,
        mode: "onBlur"
    });

    // Lista de estados brasileiros
    const estados = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
        "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
        "RS", "RO", "RR", "SC", "SP", "SE", "TO"
    ];

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

    // Handler para formatar telefone em tempo real
    const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatTelefone(e.target.value);
        setValue("telefone", formatted, { shouldValidate: true });
    };

    // Função de submit
    const onSubmit = (data: RegisterForm) => {
        console.log("Dados do cadastro:", data);
        alert("Cadastro realizado com sucesso!");
        reset();
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
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Grid para campos em linha */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Campo Nome */}
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-gray-700 font-medium">Nome Completo *</label>
                                    <input
                                        {...register("nome")}
                                        type="text"
                                        className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.nome ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                            }`}
                                        placeholder="Digite seu nome completo"
                                    />
                                    {errors.nome && (
                                        <span className="text-red-600 text-sm">{errors.nome.message}</span>
                                    )}
                                </div>

                                {/* Campo Email */}
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium">E-mail *</label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                            }`}
                                        placeholder="Digite seu e-mail"
                                    />
                                    {errors.email && (
                                        <span className="text-red-600 text-sm">{errors.email.message}</span>
                                    )}
                                </div>

                                {/* Campo Telefone */}
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium">Telefone *</label>
                                    <input
                                        {...register("telefone")}
                                        type="tel"
                                        onChange={handleTelefoneChange}
                                        maxLength={15}
                                        className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.telefone ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                            }`}
                                        placeholder="(11) 99999-9999"
                                    />
                                    {errors.telefone && (
                                        <span className="text-red-600 text-sm">{errors.telefone.message}</span>
                                    )}
                                </div>

                                {/* Campo Cidade */}
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium">Cidade *</label>
                                    <input
                                        {...register("cidade")}
                                        type="text"
                                        className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.cidade ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                            }`}
                                        placeholder="Digite sua cidade"
                                    />
                                    {errors.cidade && (
                                        <span className="text-red-600 text-sm">{errors.cidade.message}</span>
                                    )}
                                </div>

                                {/* Campo Estado */}
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium">Estado *</label>
                                    <select
                                        {...register("estado")}
                                        className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.estado ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                            }`}
                                    >
                                        <option value="">Selecione o estado</option>
                                        {estados.map((estado) => (
                                            <option key={estado} value={estado}>
                                                {estado}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.estado && (
                                        <span className="text-red-600 text-sm">{errors.estado.message}</span>
                                    )}
                                </div>

                                {/* Campo Senha */}
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-gray-700 font-medium">Senha *</label>
                                    <input
                                        {...register("senha")}
                                        type="password"
                                        className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.senha ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                            }`}
                                        placeholder="Digite sua senha (mínimo 6 caracteres)"
                                    />
                                    {errors.senha && (
                                        <span className="text-red-600 text-sm">{errors.senha.message}</span>
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