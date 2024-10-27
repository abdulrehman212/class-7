import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-around items-center gap-5 m-3">      
      <div className="bg-red-300">Box 1</div>
      <div className="bg-green-200">Box 2</div>
      <div className="bg-blue-200">Box 3</div>
      <div className="bg-yellow-100">Box 4</div>
    </div>
  );

{/*
  Comments 

  flex-col/flex-row
  
  justify-   around/between/start/end

  items-   start/end/center/stretch/baseline
  
  gap-  1/2/3/4/5

  */ }


}
