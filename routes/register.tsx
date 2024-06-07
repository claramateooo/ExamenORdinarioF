
import { FreshContext, Handlers,  RouteConfig } from "$fresh/server.ts";
import {setCookie} from "$std/http/cookie.ts";

import jwt from "jsonwebtoken";
import { User } from "../types.ts";
import Register from "../components/Register.tsx";
export const config :RouteConfig={
    skipInheritedLayouts:  true,
  
  };

  export const handler:Handlers={
   POST: async(req:Request,ctx:FreshContext)=>{
    console.log("register handler");
    const url=new URL (req.url);
    const form=await req.formData();
    const email= form.get("email")?.toString()||"";
    const password= form.get("password")?.toString()||"";
    const name= form.get("name")?.toString()||"";
    const API_URL= Deno.env.get("API_URL");
    if(!API_URL){
        throw new Error("API_URL is not set int the enviroment ");
    }
    const response = await fetch(`${Deno.env.get("API_URL")}/chechuser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password ,name}),
      });
   
  

  if (response.status == 404) {
    return ctx.render({
      message: "User does not exist or invalid data provided",
    });
  }
  const JWT_SECRET=Deno.env.get("JWT_SECRET");
  if(!JWT_SECRET){
    throw new Error("JWT_SECRET is not set in the enviroment");};


    if (response.status == 200) {
        const data: Omit<User, "password " | "favs"> = await response
          .json();
        const token = jwt.sign(
          { email, id: data.id, name: data.name },
         "JWT_SECRET",
          {
            expiresIn: "24 h",
          },
        );
  
        const headers = new Headers();
        setCookie(headers, {
          name: "auth",
          value: token,
          sameSite: "Lax",
          domain: url.hostname,
          path: "/",
          secure: true,
        });
        headers.set("location", "/videos");
        return new Response(null, {
          status: 303,
        headers,
        });
      } else {
        return ctx.render();
      }
    },
  };
const Page=()=>
    <Register/>;
export default Page;  