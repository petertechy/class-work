import Navbar from "@/Components/Layout/Navbar";
import { useAppDispatch } from "@/redux/store";
import { addData } from "@/redux/user.redux";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [number, setNumber]= useState(0)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    console.log("Component has been mounted")

  }, [])


//use effect listens for the event of a component mounting
  return (
    <>
    <Navbar/>
      <h1 className="display-1 bg-info p-3 ">This is our new App {number}</h1>
      <button onClick={()=> setNumber(number+ 1)}>Count</button>
      <button onClick={()=> dispatch(addData("International Bad man"))}>Dispatch</button>

     
    </>
  );
}
