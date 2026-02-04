import Card from "./Card";
import { menuService } from "../service/menu.route";
import { Menu } from "../types/menu.type";

export default async function Menus() {
  const menu = await menuService.getmenus();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Menus
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {menu?.map((item : Menu) => (
          <Card key={item._id} item={item} />
        ))}
      </div>

    </section>
  );
}
