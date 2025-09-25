import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel2 from '../../assets/product-detail.png';

export default function Details() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
            {/* Título */}
            <div className="space-y-3">
                <h2 className="text-4xl font-bold text-gray-800">Echo Dot (8ª Geração)</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-primary to-secundary rounded-full"></div>
            </div>

            {/* Carrossel e informações*/}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-12">
                {/* Carrossel */}
                <div className="w-full max-w-md lg:w-[400px]">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg">
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            autoPlay
                            infiniteLoop
                            interval={4000}
                            transitionTime={600}
                        >
                            <div className="bg-white rounded-xl p-4">
                                <img src={carousel2} alt="Carousel 1" className="w-full h-64 object-contain" />
                            </div>
                            <div className="bg-white rounded-xl p-4">
                                <img src={carousel2} alt="Carousel 2" className="w-full h-64 object-contain" />
                            </div>
                            <div className="bg-white rounded-xl p-4">
                                <img src={carousel2} alt="Carousel 3" className="w-full h-64 object-contain" />
                            </div>
                        </Carousel>
                    </div>
                </div>

                {/* Informações do produto */}
                <div className="flex flex-col gap-6 w-full max-w-md lg:w-[400px]">
                    {/* Card de preço*/}
                    <div className="bg-gradient-to-r from-secundary to-secundary/90 shadow-lg rounded-2xl px-10 py-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                        <div className="relative z-10">
                            <p className="text-white/80 text-lg mb-2">Preço especial</p>
                            <p className="text-white text-4xl font-bold">R$ 799,00</p>
                            <p className="text-white/90 text-lg mt-2">à vista</p>
                        </div>
                    </div>

                    {/* Card de informações do vendedor */}
                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-primary to-primary/90 px-6 py-4">
                            <h3 className="text-white text-lg font-bold">Informações do Vendedor</h3>
                        </div>
                        <div className="px-6 py-6 space-y-4">
                            <div className="space-y-3">
                                <p className="text-gray-700 font-medium">Nome do Vendedor</p>
                                <p className="text-gray-700">Cidade do Vendedor</p>
                                <p className="text-gray-700">Email do Vendedor</p>
                                <p className="text-gray-700">Telefone do Vendedor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção de descrição */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800">Descrição</h3>

                    <p className="text-gray-700 leading-relaxed text-lg">
                        A Alexa é a assistente virtual da Amazon, controlada por voz. Ela pode ser integrada a diversos dispositivos, como os da linha Echo, para executar tarefas como tocar música, definir alarmes e controlar a casa inteligente. Sua tecnologia permite uma interação natural, tornando a experiência do usuário mais conveniente e acessível.
                    </p>
                </div>
            </div>
        </div>
    )
}