import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { products } from "../data/cardData";
/**
 * Breadcrumbs component: 
 * - Dynamically generates breadcrumbs from the current location.pathname.
 * - Adds a "Back" button to go to the previous page.
 */
 function BreadCrumbs() {
  const location = useLocation();
  const navigate = useNavigate();
//   const pathnames = location.pathname.split("/").filter(x => x);
const pathnames = location.pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);

const showBack = pathnames.length === 1;

  // Build each breadcrumb with its link
  const crumbs = pathnames.map((value, idx) => {
    // Build the path up to this point
    const to = "/" + pathnames.slice(0, idx + 1).join("/");
    // Optionally, format the crumb (replace hyphens, capitalize)
    let label = decodeURIComponent(value)
      .replace(/-/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase());
      if (
      idx === pathnames.length - 1 &&
      products.some((p) => String(p.id) === decodeURIComponent(value))
    ) {
      const product = products.find((p) => String(p.id) === decodeURIComponent(value));
      if (product) label = product.name;
    }
    return { to, label };
  });

  return (
    <nav className="flex items-center self-stretch w-full py-2 gap-2" aria-label="Breadcrumb">
        {showBack ? (
      <button
        onClick={() => navigate(-1)}
        className="flex py-2 gap-4 bg-inherit items-center hover:underline text-[#424242] hover:text-[#FF6F61]"
        type="button"
      >
        <IoIosArrowBack className="flex h-5 w-5 justify-center gap-2"/>
        <span className="text-base justify-center">Back</span>
      </button>
      ) : (
      <ol className="flex items-center gap-2 p-1 self-stretch">
        <li key="home" className="">
        <Link to="/" className=" hover:underline text-[#424242] hover:text-[#FF6F61] flex items-center gap-2">
          <span className="text-base justify-center">Home</span>
          {crumbs.length > 0 &&<IoIosArrowForward className="flex h-4 w-4 justify-center gap-2"/>}
        </Link>
        </li>
        {crumbs.map((crumb, idx) => (
          
          <li key={crumb.to} className="">
            {idx < crumbs.length - 1 ? (
              <>
              <Link to={crumb.to} className="flex items-center gap-2 text-[#424242] hover:text-[#FF6F61] hover:underline text-sm font-medium">
                  {crumb.label}
                  <IoIosArrowForward className="flex h-4 w-4 justify-center gap-2"/>
              </Link>
                
              </>
            ) : (
              <span className="text-[#FF6F61] text-sm font-bold">{crumb.label}</span>
            )}
          </li>
          
        ))}
      </ol>
      )}
    </nav>
  );
}
export default BreadCrumbs;