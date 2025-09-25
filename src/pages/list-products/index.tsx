import CardProduct from "../../components/card-product/cardProduct";

export default function ListProducts() {
   return (
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
         {/* Título */}
         <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold text-gray-800">Lista de Produtos</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secundary mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg">Descubra os melhores produtos disponíveis</p>
         </div>

         {/* Grid de produtos*/}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {Array.from({ length: 13 }, (_, index) => (
               <CardProduct key={index} />
            ))}
            <CardProduct />
         </div>
      </div>
   )
}