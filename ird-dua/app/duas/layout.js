import Category from "@/app/components/Category";

export default function DuaLayout({ children }) {
  const blogs = [
    {
      id: "1",
      name: "blog 1",
      description: "blog 1 description",
      image: "https://s3.amazonaws.com/my-bucket/profile.png",
    },
    {
      id: "2",
      name: "blog 2",
      description: "blog 2 description",
      image: "https://s3.amazonaws.com/my-bucket/profile.png",
    },
    {
      id: "3",
      name: "blog 3",
      description: "blog 3 description",
      image: "https://s3.amazonaws.com/my-bucket/profile.png",
    },
  ];
  return (
    <div className="grid grid-cols-8">
      <div className="fixed h-[85.5vh] z-[0] lg:top-[134px] lg:w-[350px] xl:w-[350px] 2xl:w-[350px] 3xl:w-[350px] overflow-hidden bg-gray-10 rounded-2xl xs:block sm:hidden md:block xs:h-screen sm:h-screen lg:h-[74vh] bg-white">
        <Category />
      </div>
      <div
        id="scrollDua"
        className="w-full lg:overflow-y-auto sm-max:pb-20  md-max:mx-auto lg:col-start-2 xl-min:pb-8 xl:w-full xl:col-start-3 xl:col-span-6 mx-5 xl:gap-8 sm-max:px-2 lg-min:w-[102%] col-start-3"
      >
        {children}
      </div>
    </div>
  );
}
