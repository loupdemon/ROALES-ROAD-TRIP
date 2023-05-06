import './style.scss';

const Error = () => {
  document.title = "404 Not Found"
  return (
    <>
        <div className="view-error">
          404 Not Found
        </div>
    </>
  )
}

export default Error