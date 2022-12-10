import { GenericStateProps } from "../../utils/interfaces";
import { TiltDivider1 } from "../Dividers/TiltDividers";

export function Footer(props: GenericStateProps) {
  return (
    <div className={(props.state ? "blur-sm " : "") + "bg-transparent"}>
      <div className="bg-transparent">
        <TiltDivider1/>
      </div>
      <div className={(props.state ? "pb-0 " : "md:pb-0 pb-24 ") + "bg-snowstorm-0 px-8 text-polarnight-0"}>
      <h1 className="font-bebasNeue text-xl text-center">Mirai Website</h1>
      </div>
    </div>
  )
}

export function FooterMobile(props: GenericStateProps) {
  return (
    <div className={(props.state ? "blur-sm " : "") + "bg-transparent md:hidden"}>
      <div className="bg-transparent">
        <TiltDivider1/>
      </div>
      <div className={(props.state ? "pb-0 " : "md:pb-0 pb-24 ") + "bg-snowstorm-0 px-8 text-polarnight-0"}>
      <h1 className="font-bebasNeue text-xl text-center">Mirai Website</h1>
      </div>
    </div>
  )
}
