export type AppComponentProps = {
    id: number
    title?: string
    img?: string
    width?: number
    height?: number
    open: any
    setOpen?: any
    activeBg?: boolean
}

export const appArray: AppComponentProps[] = [
    { id: 1 ,title:"Peter", width: 100, height: 100, open: "Peter", activeBg: true},
    { id: 2 ,title:"Peter2", width: 100, height: 100, open: "Peter2", activeBg: true},
    { id: 3 ,title:"Peter3", width: 100, height: 100, open: "Peter3", activeBg: true},
]