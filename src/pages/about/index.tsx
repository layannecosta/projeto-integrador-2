import { IoRocketOutline, IoShieldCheckmarkOutline, IoHeartOutline, IoPeopleOutline } from "react-icons/io5";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";


const stats = [
    { number: "50K+", label: "Usuários Ativos" },
    { number: "100K+", label: "Produtos Vendidos" },
    { number: "500+", label: "Vendedores Parceiros" },
    { number: "98%", label: "Satisfação do Cliente" }
];

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
            {/* Hero Section */}
            <section className="text-center space-y-6">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Sobre a <span className="text-transparent bg-gradient-to-r from-primary to-secundary bg-clip-text">Unibay</span>
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-primary to-secundary mx-auto rounded-full"></div>
                </div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Somos mais que um marketplace. Somos uma ponte que conecta sonhos, necessidades e oportunidades,
                    criando uma comunidade vibrante onde cada transação é uma nova história de sucesso.
                </p>
            </section>

            {/* Estatísticas */}
            <section className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

                <div className="relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Nossa Jornada em Números</h2>
                        <p className="text-white/80 text-lg">Resultados que refletem nosso compromisso com a excelência</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <h3 className="text-3xl md:text-4xl font-bold">{stat.number}</h3>
                                <p className="text-white/90">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nossa História */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa História</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-secundary to-primary rounded-full"></div>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            A Unibay nasceu em 2020 de uma visão simples: criar um espaço digital onde qualquer pessoa
                            pudesse comprar e vender com facilidade, segurança e transparência. Fundada por uma equipe
                            apaixonada por tecnologia e inovação, começamos como um pequeno projeto universitário.
                        </p>
                        <p>
                            Hoje, somos uma das principais plataformas de marketplace do Brasil, conectando milhares
                            de vendedores a compradores em todo o país. Nossa jornada é marcada pela constante evolução
                            e pelo compromisso inabalável com a satisfação dos nossos usuários.
                        </p>
                        <p>
                            Cada marco alcançado é resultado do trabalho dedicado de nossa equipe e da confiança
                            depositada por nossa comunidade de usuários, que são o coração de tudo o que fazemos.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                            alt="Equipe Unibay trabalhando"
                            className="w-full h-64 object-cover rounded-2xl shadow-md"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-secundary text-white p-4 rounded-2xl shadow-lg">
                            <p className="font-bold text-lg">2020</p>
                            <p className="text-sm">Fundação</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missão, Visão e Valores */}
            <section className="space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Pilares</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secundary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Os valores que nos guiam em cada decisão e nos mantêm focados no que realmente importa
                    </p>
                </div>

                {/* Cards de Missão, Visão e Valores */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto">
                                🎯
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Missão</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Democratizar o comércio eletrônico, oferecendo uma plataforma acessível, segura e
                                intuitiva que conecte pessoas e oportunidades de negócio em todo o Brasil.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-secundary to-secundary/80 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto">
                                👁️
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Visão</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ser a principal plataforma de marketplace da América Latina, reconhecida pela
                                excelência em experiência do usuário e inovação tecnológica.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto">
                                ⭐
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Valores</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Transparência, inovação, respeito ao cliente, sustentabilidade e compromisso
                                com o crescimento de nossa comunidade de usuários.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-secundary to-secundary/90 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 -translate-x-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 translate-x-12"></div>

                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl font-bold">Faça Parte da Nossa História</h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto">
                        Junte-se a milhares de usuários que já descobriram uma nova forma de comprar e vender online.
                        Sua jornada com a Unibay começa agora!
                    </p>
                    <button className="bg-white text-secundary px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        Começar Agora
                    </button>
                </div>
            </section>
        </div>
    );
}