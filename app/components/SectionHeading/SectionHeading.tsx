interface Props {
    headingMini: string;
    headingMain: string;
}

const SectionHeading = ({headingMini, headingMain}: Props) => {
  return (
    <div className="text-center p-2">
        <p className="text-sky-900 md:text-[16px] text-[15px]">{headingMini}</p>
        <h1 className="font-bold mt-[.5rem] text-[22px] md:text-[30px] text-gray-900">{headingMain}</h1>
    </div>
  )
}

export default SectionHeading
