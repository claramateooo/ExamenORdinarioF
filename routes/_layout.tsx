import { FreshContext } from "$fresh/src/server/types.ts";
import Header from "../components/Header.tsx";

export default async function Layout(req:Request,ctx:FreshContext){
    return (<div><Header userName={"unknown"}/>
    <ctx.Component/>
    </div>)
}