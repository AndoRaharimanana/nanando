function Skeleton() {
  return (
        <div className="animate-pulse flex gap-1 min-h-screen w-full bg-nanando-black">
          <div className="flex flex-[2] min-h-screen bg-dark-grey">
            <div className="flex h-4 w-10 bg-nanando-soft-grey rounded self-end m-6"></div>
          </div>
          <div className="relative flex flex-[1] min-h-screen bg-dark-grey">
            <div className="absolute h-32 w-[700px] rounded self-center mx-4">
              <div className="h-32 w-[500px] bg-nanando-soft-grey rounded-3xl self-center mb-16 mx-2"></div>
              <div className="h-32 w-full bg-nanando-soft-grey rounded-3xl self-center mx-2"></div>
            </div>
          </div>
          <div className="flex-[1] min-h-screen bg-dark-grey"></div>
          <div className="flex-[1] min-h-screen bg-dark-grey"></div>
          <div className="flex-[1] min-h-screen bg-dark-grey"></div>
          <div className="flex-[2] min-h-screen bg-dark-grey"></div>
        </div>  
  );
}

export default function Banner() {
    return (     
      <div className="flex gap-1 min-h-screen w-full bg-nanando-black">
        <div className="flex-[2] min-h-screen bg-dark-grey"></div>
        <div className="flex-[1] min-h-screen bg-dark-grey"></div>
        <div className="flex-[1] min-h-screen bg-dark-grey"></div>
        <div className="flex-[1] min-h-screen bg-dark-grey"></div>
        <div className="flex-[1] min-h-screen bg-dark-grey"></div>
        <div className="flex-[2] min-h-screen bg-dark-grey"></div>
      </div> 
    );
  }