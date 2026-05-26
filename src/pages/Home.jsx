import Gitter from "../components/Gitter";
import adsMatrixContent from "../data/content";

export default function Home() {
  const data = adsMatrixContent;
  console.log(data);
  return (
    <main className="flex flex-col items-center py-8">
      <img src="/Logo.png" alt="" className="size-20 object-contain" />
      <Gitter>
        <section className="flex flex-col justify-center items-center w-full h-full relative z-20 gap-4">
          <h1 className="text-white text-4xl">{data.hero.headline}</h1>
          <span className="font-vga-text text-white text-sm text-center">
            Nur <span className="text-primary">1%</span> der Werbekonten <br />
            erhalten <span className="text-primary">99%</span> der Ergebnisse
          </span>
          <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
            Kostenloses Erstgespräch
          </button>
        </section>
      </Gitter>
      <section className="flex flex-col justify-center items-center w-full h-full relative z-20 gap-4">
        <h1 className="text-white text-4xl">{data.hero.headline}</h1>
        <span className="font-vga-text text-white text-sm text-center">
          Nur <span className="text-primary">1%</span> der Werbekonten <br />
          erhalten <span className="text-primary">99%</span> der Ergebnisse
        </span>
        <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
          Kostenloses Erstgespräch
        </button>
      </section>
    </main>
  );
}
