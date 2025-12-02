type ComponentProps = {
    title?: string
    width?: number
    height?: number
    onBtnClick?: any
    fontSize?: number
}

function Button({title = "", width = 25, height = 25, onBtnClick, fontSize=10}: ComponentProps){
    return(
        <button style={{width: `${width}px`, height: `${height}px`, 
            minWidth: `20px`, minHeight: `20px`, 
            fontSize: `${fontSize}px`}} className="
            flex items-center justify-center
            bg-accent-400 border-b-[4px] border-l-[4px] border-accent-200
            rounded-[8px]
            transtion duration-75
            hover:bg-accent-300
            active:bg-accent-300 active:border-t-[4px] active:border-r-[4px] active:border-b-0 active:border-l-0
            text-primary-900
            font-mono font-bold
        " onClick={onBtnClick}>
            {title}
        </button>
    );
}

export default Button