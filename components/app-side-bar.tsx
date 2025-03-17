import Filter from "./sidebar/filter";
import Category from "./sidebar/category";
import Gender from "./sidebar/gender";
import Price from "./sidebar/price";
import Colors from "./sidebar/colors";
export default function AppSideBar() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-[290px] hidden sm:block">
      <Filter />
      <Category />
      <Gender />
      <Price />
      <Colors />
    </div>
  );
}
