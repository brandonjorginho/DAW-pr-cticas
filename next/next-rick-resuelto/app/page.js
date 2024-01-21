
import Image from "next/image";
const getCharacters = async () => {
  const resp = await fetch("https://rickandmortyapi.com/api/character?page=19");
  const result = await resp.json();
  return result.results;
};

export default async function Home() {
  const characters = await getCharacters();
  return (
    <main className="bg-gray-950 px-10 pt-5 pb-5">
      <section>
        <h3 className="text-gray-300 text-2xl font-title">API</h3>
        <p className="text-gray-400">Consumo de la API</p>
        <div className="flex flex-row mt-3 flex-wrap">
          {characters.map((character) => (
            <div className="basis-1/3 mt-1" key={character.id}>
              <div className="flex p-3 bg-slate-50 rounded-sm shadow-md shadow-lime-600">
                <Image
                  className="w-1/3 rounded-sm mr-2"
                  src={character.image}
                  width={300}
                  height={200}
                  alt={character.name}
                  loading="lazy"
                />
                {/* unknown,Alive,Dead */}
                <div>
                  <h4 className="font-title text-gray-400 text-3xl">
                    {character.name}
                  </h4>
                  <p className="text-black">
                    <b>Especie:</b> {character.species}
                  </p>
                  <p className="text-black">
                    <b>Género:</b> {character.gender}
                  </p>
                  <p className="text-black mt-2">
                    <b>Estado:</b>
                  </p>
                  <span className="rounded-md bg-green-700 font-title px-3 text-center text-white">
                    {character.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
