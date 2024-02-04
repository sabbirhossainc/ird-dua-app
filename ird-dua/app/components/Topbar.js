import MenuCom from "@/app/components/MenuCom";
import Search from "@/app/components/Search";
export default function Topbar() {
  return (
    
      <div className="right-10 lg:left-[1rem] xl:left-1 hidden xl:relative mb-32 lg: xl:block 2xl:block 3xl:block">
        <div className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr] 3xl:grid-cols-[81%,1fr]">
          <div className="flex flex-row justify-between">
            <div className="text-left flex items-center">
              <div>
                <h1 className="text-2xl">Duas Page</h1>
              </div>
             
            </div>
            <div className="flex flex-row items-center relative">
              <Search/>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end">
            <div className="md:-z-[1] lg:-z-[1]"></div>
            <div className="">
              <MenuCom />
            </div>
          </div>
        </div>
      </div>
  );
}
