import Debounce from "./component/debounce";
import Task from "./component/task";
import Test from "./component/temp";
import Throteling from "./component/throteling";
export default function Home() {
  
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center flex-col gap-3 text-blue-500">
      {/* <Debounce /> */}
      {/* <Test /> */}
      {/* <Throteling /> */}
      <Task />
    </div>
  );
}
