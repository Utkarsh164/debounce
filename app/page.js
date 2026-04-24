import Debounce from "./component/debounce";
import Test from "./component/temp";
import Throteling from "./component/throteling";
export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center gap-1 ">
      {/* <Debounce /> */}
      {/* <Test/> */}
      <Throteling />
    </div>
  );
}
