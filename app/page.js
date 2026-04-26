import Debounce from "./component/debounce";
import Task from "./component/task";
import Test from "./component/temp";
import Throteling from "./component/throteling";
export default function Home() {
  // const data = [
  //   {
  //     id: 1,
  //     name: "Utkarsh",
  //     age: 22,
  //     city: "Delhi",
  //   },
  //   {
  //     id: 2,

  //     name: "xyz",
  //     age: 21,
  //     city: "Delhi",
  //   },
  //   {
  //     id: 3,
  //     name: "abc",
  //     age: 20,
  //     city: "Delhi",
  //   },
  //   {
  //     id: 4,
  //     name: "mno",
  //     age: 23,
  //     city: "Delhi",
  //   },
  //   {
  //     id: 5,
  //     name: "ert",
  //     age: 24,
  //     city: "Delhi",
  //   },
  //   {
  //     id: 6,
  //     name: "asd",
  //     age: 25,
  //     city: "Delhi",
  //   },
  //   {
  //     id: 7,
  //     name: "dsa",
  //     age: 26,
  //     city: "Delhi",
  //   },
  //   {
  //     id: 8,
  //     name: "mln",
  //     age: 27,
  //     city: "Delhi",
  //   },
  //   {
  //     id: 9,
  //     name: "poi",
  //     age: 28,
  //     city: "Delhi",
  //   },
  //   {
  //     id: 10,
  //     name: "lkjh",
  //     age: 29,
  //     city: "Delhi",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center flex-col gap-3 text-blue-500">
      {/* <Debounce /> */}
      {/* <Test /> */}
      {/* <Throteling /> */}
      <Task />

      {/*<div> List</div>
       {data
        .filter((val) => {
          return val.age > 24;
        })
        .map((val) => {
          return (
            <div key={val.id}>
              Name : {val.name} Age : {val.age}
            </div>
          );
        })} */}
    </div>
  );
}
