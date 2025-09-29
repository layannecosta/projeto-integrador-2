import CardProductAdmin from "../../components/card-product-admin"
import { useNavigate } from 'react-router-dom';

export default function UserProducts() {

   const navigate = useNavigate();

   return (

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
         <div className="flex justify-between items-center">
            {/* Título */}
            <div className="text-center space-y-3">
               <h1 className="text-3xl font-bold text-gray-800">Seus anúncios</h1>
               <div className="w-24 h-1 bg-gradient-to-r from-primary to-secundary mx-auto rounded-full"></div>
               <p className="text-gray-600 text-lg">Gerencie seus produtos anunciados</p>
            </div>
            {/* Botão anunciar */}
            <div>
               <button
                  onClick={() => navigate("/form-products")}
                  className="bg-secundary px-8 py-2 text-white rounded-md">
                  Anunciar
               </button>
            </div>
         </div>
         {/* Grid de produtos*/}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {Array.from({ length: 4 }, (_, index) => (
               <CardProductAdmin key={index} />
            ))}
            <CardProductAdmin />
         </div>
         <p className="text-right">Total de itens: 4</p>
      </div>
   )
}