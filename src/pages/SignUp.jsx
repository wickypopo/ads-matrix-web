import Button from "../components/Button";

export default function SignUp() {
  return (
    <main className="w-screen h-screen p-4">
      <section className="border-primary border-2 w-full h-full">
        <div className="bg-primary p-1 flex justify-between">
          <h2 className="text-xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
            Wie erreichen wir dich?
          </h2>
          <h2 className="text-xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
            X
          </h2>
        </div>

        <form className="p-4 flex flex-col gap-2">
          <label for="cars" className="text-white">
            Wie viel Werbebudget gibst du pro Monat aus?
          </label>
          <select
            id="cars"
            name="cars"
            size="4"
            className="w-full bg-primary p-4 text-lg outline-none"
          >
            <option className="my-1" value="volvo">
              Ich schalte aktuell keine ads
            </option>
            <option className="my-1" value="saab">
              Weniger als 2.000 €/Monat
            </option>
            <option className="my-1" value="fiat">
              2.000 € - 10.000 €{" "}
            </option>
            <option className="my-1" value="audi">
              Mehr als 10.000 €/Monat
            </option>
          </select>
          <input
            type="text"
            className="w-full bg-primary p-4 text-lg"
            placeholder="Vorname"
          />
          <input
            type="text"
            className="w-full bg-primary p-4 text-lg"
            placeholder="Nachname"
          />
          <input
            type="text"
            className="w-full bg-primary p-4 text-lg"
            placeholder="E-Mail"
          />
          <input
            type="text"
            className="w-full bg-primary p-4 text-lg"
            placeholder="Telefon"
          />
        </form>
      </section>
    </main>
  );
}
