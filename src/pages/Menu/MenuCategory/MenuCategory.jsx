import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, subHeading }) => {
  console.log(items);
  return (
    <div className="">
      {title && <Cover img={img} title={title} subHeading={subHeading}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Your Favorite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
