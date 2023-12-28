export default function Section1() {
    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="flex flex-col justify-center w-1/2 pt-16"> {/* Adiciona uma margem à esquerda para mover o contêiner um pouco para a direita */}
                <div className=" flex flex-row-reverse justify-between">
                    <img src="/images/carro.png" alt="" width={800} className="absolute top-56 z-20 mt-4" />
                    <h1 className="absolute text-7xl font-bold z-10 mb-12">Toyota Corola <span className="text-red-950">2023</span></h1>
                    <img src="/images/rectangle.png" alt="" width={400} />
                    <div className="absolute  flex flex-col justify-end h-2/3">
                    <h3 className="text-white text-xl mr-9 font-bold">Conquiste o seu 0km <br/> por 42x de R$5.300</h3>
                    </div>

                </div>
                <button className="p-3 bg-red-700 rounded-md w-48 text-white self-end mt-2">Veja Mais</button> {/* Adiciona uma margem superior para manter a distância */}
            </div>
        </div>
    );
}
