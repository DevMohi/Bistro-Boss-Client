import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle subHeading="Check it out" heading="Featured Item" />
      <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ad
            optio dicta? Sequi corrupti vitae facilis officiis recusandae
            laborum quisquam nulla explicabo facere obcaecati, aliquid
            reiciendis accusantium id sunt vel aperiam est cum voluptas
            repellat. Accusamus cupiditate veniam itaque provident. Eum
            accusamus neque nobis cupiditate ea modi iure recusandae nostrum.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
