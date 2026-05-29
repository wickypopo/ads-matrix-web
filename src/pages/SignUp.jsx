import Button from "../components/Button";
import { Box } from "../components/Grid";

export default function SignUp() {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const website = form.get("website");
    const email = form.get("email");
    const phone = form.get("phone");
    const budget = form.get("budget");

    const payload = {
      name: name,
      website: website,
      email: email,
      phone: phone,
      custom_fields: {
        budget: budget,
      },
    };

    console.log(payload);

    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/9781487/4b40u4y/",
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      console.error(result);
      return;
    }

    console.log("Lead sent:", result);
  }
  return (
    <main className="w-screen h-screen p-4 flex justify-center items-center">
      <Box title="Wie erreichen wir dich?">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="px-4 py-6 flex flex-col gap-2"
        >
          <input
            type="text"
            className="w-full bg-primary p-4 text-lg"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            className="w-full bg-primary p-4 text-lg"
            placeholder="E-Mail"
            name="email"
            required
          />
          <input
            type="number"
            className="w-full bg-primary p-4 text-lg"
            placeholder="Telefon"
            name="phone"
            required
          />
          <input
            type="text"
            className="w-full bg-primary p-4 text-lg"
            placeholder="Deine Website"
            name="website"
            required
          />
          <div className="mt-2 mb-4">
            <label for="cars" className="text-white text-lg">
              Wie viel Werbebudget gibst du pro Monat aus?
            </label>

            <select
              name="budget"
              className="w-full bg-primary p-4 text-lg outline-none"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Auswählen
              </option>
              <option value="Ich schalte aktuell keine ads">
                Ich schalte aktuell keine ads
              </option>
              <option value="Weniger als 2.000 €/Monat">
                Weniger als 2.000 €/Monat
              </option>
              <option value="2.000 € - 10.000 €">2.000 € - 10.000 € </option>
              <option value="Mehr als 10.000 €/Monat">
                Mehr als 10.000 €/Monat
              </option>
            </select>
          </div>
          <button className="w-full bg-white p-4 text-lg outline-none cursor-none">
            Abschicken
          </button>
        </form>
      </Box>
    </main>
  );
}
