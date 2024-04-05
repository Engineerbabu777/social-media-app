

type Props = {
 big?:boolean;
 url:string;
}

export default function Avatar({ big=false,url}: Props) {


    return (<>

        <div className={" rounded-full overflow-hidden "+(big? ' w-32 h-32 ' : ' w-12 h-12')}>
            <img src={url || "/user-1.avif"} alt={"text"} className="" />
        </div>


    </>)
}