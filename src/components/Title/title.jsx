const titleButton  = ({ title }) => {
    return (
        <button>
            {title ? title : "Error"}
        </button>
    )
}

export default titleButton;