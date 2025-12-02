import { useEffect, useRef, useState } from "react";

type ComponentProps = {
    title?: string
    img?: string
    width?: number
    height?: number
    open: any
    setOpen: any
}

function DesktopIcon({ title = "Title", img = "src/assets/icon/test-icon.jpg", width = 100, height = 100, open = "", setOpen }: ComponentProps) {
    const fontSize = Math.max(10, width * 0.15)
    const paddingTopBot = Math.max(5, height*0.65);
    const paddingLeftRight = Math.max(5, width*0.075);

    const [countClicks, setCountClicks] = useState(0);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        };
    }, []);

    const handleClick = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setCountClicks(prev => {const next = prev + 1;

        if (next >= 2) {
            setIsClicked(true);
            return 0;
        }

        timeoutRef.current = window.setTimeout(() => {
            setIsClicked(false);
            setCountClicks(0);
            setOpen(open);
        }, 1000);

        return next;
        });
    };

    return (
        <div
            className={`flex flex-col justify-center items-center
                rounded-xl 
                cursor-pointer
                transiton duration-150
                hover:bg-white/15
                active:duration-0 active:bg-white/5
                `}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                padding: `${paddingTopBot}px ${paddingLeftRight}px`
            }}
        >
            <button onClick={handleClick} className="
            w-full
            ">
                <img src={img} alt="Icon Image" className="rounded-xl"/>
            </button>

            <h1 style={{
                    fontSize: `${fontSize}px`,
                    textAlign: "center"
                }}
                className="
                    mt-2
                    text-text-primary
                    font-mono font-bold
                "
            >
                {title}
            </h1>
        </div>
    )
}

export default DesktopIcon
