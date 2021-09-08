import Label from "./Label";

type ButtonProps = {
  onClick: Function;
  label: string;
  style?: string;
}

const Button = ({onClick, label, style = ''} : ButtonProps) => {
  return (
    <button
      className={`relative group py-4 rounded-md border-none shadow-md w-60 outline-none active:bg-blue-700 text-white transition-colors duration-150 ${style}`}
      onClick={() => onClick()}>
        <span className="absolute group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700"></span>
        <Label className="text-black text-xl font-normal active:text-white">{label}</Label>
    </button>
  )
}

export default Button;