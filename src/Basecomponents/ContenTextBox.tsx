import React from 'react'

const ContenTextBox: React.FC = () =>{
  return(
       <div className="w-full flex flex-col justify-around min-h-[500px]    p-[40px] max-sm:p-[10px] ">
      <h1 className="text-4xl ">
        7,000 ft. Above ordinary in the heart of the Canadian Rockies, Banff,
        Canada
      </h1>
      <hr className=" border-[1px] border-solid border-[hsl(49,70%,45%)] my-5 " />

      <div className="w-full flex justify-between gap-10 max-md:flex-col  ">

        <div className=" w-[60%] flex flex-col gap-5  max-xl:w-full    ">
          <h1 className="text-[20px]">
            NESTLED HIGH IN THE ICONIC CANADIAN ROCKIES, SUNSHINE MOUNTAIN
            LODGE DELIVERS EXTRAORDINARY LUXURY SURROUNDED BY BREATHTAKING
            SCENERY
          </h1>
          <span className="text-xl">
            World-famous dining. Opulent rooms. Friendly, courteous staff.
            Outside, a sky so full of stars you won’t believe your eyes. And
            some of the best skiing you’ll find, just footsteps from your
            room.
          </span>
          <span className="text-xl">
            Sunshine Mountain Lodge is the ONLY ski-in, ski-out hotel in Banff
            National Park. It offers casual and fine dining, the area’s
            largest hot tub and family-friendly activities. Our new West Wing
            offers rooms with in-floor heating, jetted tubs, large-screen HD
            TVs, all in a rustic mountain theme.
          </span>
        </div>

        <div className=" w-[40%] flex flex-col  gap-5  max-xl:w-full   ">

          <div className="">
            <h1 className="text-[20px]">LOCATION</h1>
            <span className="text-xl">
              You will be staying high in the Canadian Rockies, at 2,200
              metres (7,200 feet) in Canada’s first national park – so
              special, it’s part of a UNESCO World Heritage Site.
            </span>
          </div>
          <div className="">
            <h1 className="text-[20px]">WHY YOU'LL LOVE US</h1>
            <span className="text-xl">
              Because Sunshine Mountain Lodge sits in the heart of Sunshine
              Village Ski & Snowboard Resort, you can be the first on the
              slopes each morning.
            </span>
          </div>

          <div></div>
        </div>

      </div>

      <hr className=" border-[1px] border-solid border-[rgb(197,167,35)] my-5 " />
     </div>
  )
}

export default ContenTextBox;