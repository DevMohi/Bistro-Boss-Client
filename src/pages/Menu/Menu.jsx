import { useMenu } from "../../hooks/useMenu";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title> Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Our title"
        subHeading="Hi this is a subheading , please look at it . Replace it with good content please and thank you "
      ></Cover>
      {/* {main cover} */}
      <SectionTitle subHeading={"Dont Miss"} heading={"Today's Offer"} />

      {/* offered menu items  */}
      <MenuCategory items={offered} />

      {/* {dessert menu items } */}

      <MenuCategory
        items={desserts}
        title="dessert"
        subHeading="Hi this is a custom title message help us do this thing"
        img={dessertImg}
      />
      <MenuCategory
        items={pizza}
        title="pizza"
        subHeading="Hi this is a Pizzas title message help us do this thing"
        img={pizzaImg}
      />
      <MenuCategory
        items={salad}
        title="salad"
        subHeading="Hi this is a Salads title message help us do this thing"
        img={saladImg}
      />
      <MenuCategory
        items={soup}
        title="soup"
        subHeading="Hi this is a Soup title message help us do this thing"
        img={soupImg}
      />
    </div>
  );
};

export default Menu;
