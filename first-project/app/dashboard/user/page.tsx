import Link from "next/link";

<h1> Hey there this page is dashboard/user/page </h1>

const Pageta = () => {
    return (
        <div>
            <h1> Dashboard users </h1>
            <ul className="mt-10"/>
            <li>
                <Link href={'/dashboard/user/1'}> User 1 </Link>
            </li>
            <li>
                <Link href={'/dashboard/user/2'}> User 2 </Link>
            </li>
            <li>
                <Link href={'/dashboard/user/3'}> User 3 </Link>
            </li>
            <li>
                <Link href={'/dashboard/user/4'}> User 4 </Link>
            </li>
            <li>
                <Link href={'/dashboard/user/5'}> User 5 </Link>
            </li>   
            
        </div>
    );
}
export default Pageta;