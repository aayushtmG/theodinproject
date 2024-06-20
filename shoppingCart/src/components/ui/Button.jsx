const Button = ({ onClick, title }) => {
  return (
    <button
      className="w-full px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition duration-300"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
export default Button
