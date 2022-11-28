import { sideMenuLinks } from "../utils/Constants"
import { Button } from "../Button"
export const SideNav = () => {

  console.log(sideMenuLinks)
  return (
    <nav className=" flex flex-col pt-8">
      <Button/>
      <div>
        <ul className=" space-y-2 text-sm mt-8">
          {sideMenuLinks && sideMenuLinks.map((item, i) => (
            <span key={i} className=" block w-full space-y-1 ">
              <p className={`pl-8 text-[#647787] text-[11px] ${item.Parent===''? 'mt-3':'mt-5'}`}>{item.Parent}</p>
              {item.links && item.links.map((obj, index) => (
                <li key={index} className={` cursor-pointer text-[#647787] text-[11px] ${obj.isActive? "bg-[#E8F1FD] border-l-blueLight" :' hover:text-blueLight'} pl-[18px] py-2 border-l-4  `}>
                <a href="/#" className="space-x-3">
                  <span className=" float-left inline-block text-xl mt-[1px]">
                    <img alt="icon" src={obj.icon}  className="  w-full object-contain"/>
                  </span>
                  <span className="  inline-block">{obj.name} </span>
                </a>
              </li>
              ))}
            </span>
            ))
          }
        </ul>
        
      </div>

    </nav>
  )
}