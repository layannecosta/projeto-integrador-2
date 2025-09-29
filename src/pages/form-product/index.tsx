import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type FormProducts = {
    name: string;
    manufacturer: string;
    category: string;
    price: string;
    description: string;
    url1: string;
    url2: string;
};

// Schema de validação com Yup
const schema = yup.object().shape({
    name: yup
        .string()
        .required("O nome do produto é obrigatório")
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .max(100, "O nome deve ter no máximo 100 caracteres"),

    manufacturer: yup
        .string()
        .required("O fabricante é obrigatório")
        .min(2, "O fabricante deve ter pelo menos 2 caracteres")
        .max(50, "O fabricante deve ter no máximo 50 caracteres"),

    category: yup
        .string()
        .required("A categoria é obrigatória")
        .oneOf(
            ["Jogos", "Roupas", "Veículos", "Ferramentas", "Comidas", "Presentes", "Outros"],
            "Selecione uma categoria válida"
        ),

    price: yup
        .string()
        .required("O preço é obrigatório")
        .matches(/^\d+([.,]\d{1,2})?$/, "Digite um preço válido (ex: 199.99 ou 199,99)")
        .test("min-value", "O preço deve ser maior que zero", (value) => {
            if (!value) return false;
            const numValue = parseFloat(value.replace(",", "."));
            return numValue > 0;
        }),

    description: yup
        .string()
        .required("A descrição do produto é obrigatória")
        .min(10, "A descrição deve ter pelo menos 10 caracteres")
        .test("not-empty-html", "A descrição não pode estar vazia", (value) => {
            if (!value) return false;
            // Remove tags HTML e verifica se há conteúdo
            const textContent = value.replace(/<[^>]*>/g, '').trim();
            return textContent.length > 0;
        }),

    url1: yup
        .string()
        .required("A URL da primeira imagem é obrigatória")
        .url("Digite uma URL válida (ex: https://exemplo.com/imagem.jpg)")
        .matches(/\.(jpg|jpeg|png|gif|webp)$/i, "A URL deve terminar com uma extensão de imagem válida"),

    url2: yup
        .string()
        .required("A URL da segunda imagem é obrigatória")
        .url("Digite uma URL válida (ex: https://exemplo.com/imagem.jpg)")
        .matches(/\.(jpg|jpeg|png|gif|webp)$/i, "A URL deve terminar com uma extensão de imagem válida")
});

export default function FormProducts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm<FormProducts>({
        resolver: yupResolver(schema) as any,
        mode: "onBlur",
        defaultValues: {
            description: ""
        }
    });

    // Lista de categorias
    const categorias = [
        "Jogos",
        "Roupas",
        "Veículos",
        "Ferramentas",
        "Comidas",
        "Presentes",
        "Outros"
    ];

    // Configuração da toolbar do ReactQuill
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['link'],
            ['clean']
        ]
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'color', 'background',
        'link'
    ];

    const onSubmit = (data: FormProducts) => {
        console.log("Dados do formulário:", data);
        alert("Produto cadastrado com sucesso!");
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold mb-4 text-[20px]">Novo Produto</h1>
                <div className="bg-white p-8 rounded-lg space-y-4">
                    <div className="flex gap-4">
                        {/* Nome do Produto */}
                        <div className="flex-1 space-y-2">
                            <label className="text-gray-700 font-medium text-sm">Nome do Produto *</label>
                            <input
                                {...register("name")}
                                placeholder="Nome do Produto"
                                className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                    }`}
                            />
                            {errors.name && (
                                <span className="text-red-600 text-sm">{errors.name.message}</span>
                            )}
                        </div>

                        {/* Fabricante */}
                        <div className="flex-1 space-y-2">
                            <label className="text-gray-700 font-medium text-sm">Fabricante *</label>
                            <input
                                {...register("manufacturer")}
                                placeholder="Fabricante"
                                className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.manufacturer ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                    }`}
                            />
                            {errors.manufacturer && (
                                <span className="text-red-600 text-sm">{errors.manufacturer.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* Categoria */}
                        <div className="flex-1 space-y-2">
                            <label className="text-gray-700 font-medium text-sm">Categoria *</label>
                            <select
                                {...register("category")}
                                className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.category ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                    }`}
                            >
                                <option value="">Selecione uma categoria</option>
                                {categorias.map((categoria) => (
                                    <option key={categoria} value={categoria}>
                                        {categoria}
                                    </option>
                                ))}
                            </select>
                            {errors.category && (
                                <span className="text-red-600 text-sm">{errors.category.message}</span>
                            )}
                        </div>

                        {/* Preço */}
                        <div className="flex-1 space-y-2">
                            <label className="text-gray-700 font-medium text-sm">Preço (R$) *</label>
                            <input
                                {...register("price")}
                                placeholder="199.99"
                                className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.price ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                    }`}
                            />
                            {errors.price && (
                                <span className="text-red-600 text-sm">{errors.price.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* URL Imagem 1 */}
                        <div className="flex-1 space-y-2">
                            <label className="text-gray-700 font-medium text-sm">URL da Imagem 1 *</label>
                            <input
                                {...register("url1")}
                                placeholder="https://exemplo.com/imagem1.jpg"
                                className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.url1 ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                    }`}
                            />
                            {errors.url1 && (
                                <span className="text-red-600 text-sm">{errors.url1.message}</span>
                            )}
                        </div>

                        {/* URL Imagem 2 */}
                        <div className="flex-1 space-y-2">
                            <label className="text-gray-700 font-medium text-sm">URL da Imagem 2 *</label>
                            <input
                                {...register("url2")}
                                placeholder="https://exemplo.com/imagem2.jpg"
                                className={`w-full border-2 h-[40px] px-4 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${errors.url2 ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                    }`}
                            />
                            {errors.url2 && (
                                <span className="text-red-600 text-sm">{errors.url2.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Descrição com ReactQuill */}
                    <div className="space-y-2 mb-8">
                        <label className="text-gray-700 font-medium text-sm">Descrição do Produto *</label>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <ReactQuill
                                    theme="snow"
                                    style={{ height: 500 }}
                                    value={field.value}
                                    onChange={field.onChange}
                                    modules={modules}
                                    formats={formats}
                                    placeholder="Descreva o produto em detalhes..."
                                    className={`bg-white rounded-lg ${errors.description ? "border-2 border-red-500" : ""
                                        }`}
                                />
                            )}
                        />
                        {errors.description && (
                            <span className="text-red-600 text-sm">{errors.description.message}</span>
                        )}
                    </div>

                    {/* Botões  */}
                    <div className="flex justify-center gap-4 mt-4">
                        <button className="bg-primary text-white px-8 py-2 rounded-lg">
                            Salvar
                        </button>
                        <button
                            onClick={() => alert("")}
                            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg">
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}