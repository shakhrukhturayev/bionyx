const Button = ({styles}) => {
  return (
    <button type="submit" className={` sm:px-6 px-3 py-3 rounded-sm font-raleway font-bold sm:text-[18px] text-[16px] hover:bg-[#8ce404] peer-hover:outline-[#24acd4] text-[#fff]  block  hover:text-[#fff] duration-500 bg-[#24acd4] border  ${styles}`}>Buyurtma berish</button>
  )
}

export default Button