import CardProduct from "../../components/card-product/cardProduct";

export default function SearchProducts() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            {/* Título*/}
            <div className="space-y-3">
                <h1 className="text-3xl font-bold text-gray-800">Resultado da Busca</h1>
                <div className="w-32 h-1 bg-gradient-to-r from-primary to-secundary rounded-full"></div>
                <p className="text-gray-600 text-lg">Encontramos 4 produtos para sua pesquisa</p>
            </div>

            {/* Grid de produtos*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                {Array.from({ length: 3 }, (_, index) => (
                    <CardProduct key={index} />
                ))}
                <CardProduct />
            </div>
        </div>
    )
}