import { useState } from "react";

type ContactForm = {
    nome: string;
    email: string;
    mensagem: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<ContactForm>({
        nome: "",
        email: "",
        mensagem: ""
    });

    const [errors, setErrors] = useState<Partial<ContactForm>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactForm> = {};

        if (!formData.nome.trim()) {
            newErrors.nome = "O nome é obrigatório";
        } else if (formData.nome.trim().length < 2) {
            newErrors.nome = "O nome deve ter pelo menos 2 caracteres";
        }

        if (!formData.email) {
            newErrors.email = "O email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Digite um email válido";
        }

        if (!formData.mensagem.trim()) {
            newErrors.mensagem = "A mensagem é obrigatória";
        } else if (formData.mensagem.trim().length < 10) {
            newErrors.mensagem = "A mensagem deve ter pelo menos 10 caracteres";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name as keyof ContactForm]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = () => {
        if (validateForm()) {
            setIsSubmitting(true);

            setTimeout(() => {
                console.log("Dados do contato:", formData);
                setIsSubmitting(false);
                setSubmitSuccess(true);

                setFormData({
                    nome: "",
                    email: "",
                    mensagem: ""
                });

                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-slate-100">
            <div className="w-full max-w-2xl">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-primary px-8 py-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>

                        <div className="relative z-10">
                            <h1 className="text-white font-bold text-3xl mb-2">Unybay</h1>
                            <p className="text-white/90 text-lg">Fale Conosco através do formulário abaixo</p>
                        </div>
                    </div>

                    <div className="px-8 py-8">
                        {submitSuccess && (
                            <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center">
                                <p className="text-green-700 font-semibold">
                                    ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                                </p>
                            </div>
                        )}

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-gray-700 font-medium block">Nome completo *</label>
                                <input
                                    name="nome"
                                    type="text"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-200 h-12 px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-600 outline-none transition-all duration-200"
                                    placeholder="Digite seu nome completo"
                                    disabled={isSubmitting}
                                />
                                {errors.nome && (
                                    <span className="text-red-600 text-sm block">{errors.nome}</span>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700 font-medium block">E-mail *</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-200 h-12 px-4 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-600 outline-none transition-all duration-200"
                                    placeholder="Digite seu e-mail"
                                    disabled={isSubmitting}
                                />
                                {errors.email && (
                                    <span className="text-red-600 text-sm block">{errors.email}</span>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700 font-medium block">Escreva sua mensagem *</label>
                                <textarea
                                    name="mensagem"
                                    value={formData.mensagem}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-600 outline-none transition-all duration-200 resize-none"
                                    placeholder="Digite sua mensagem aqui..."
                                    disabled={isSubmitting}
                                />
                                {errors.mensagem && (
                                    <span className="text-red-600 text-sm block">{errors.mensagem}</span>
                                )}
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white h-12 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? "Enviando..." : "Enviar"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}