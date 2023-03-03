import React from "react";

export default function EventCard(props){
    return (
        <main className="aspect-square flex flex-col  text-white">
        <section className="bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 mb-3 px-5 py-2">
            <h1 className="text-2xl text-white font-semibold">{props.heading}</h1>
        </section>                
        <section className="basis-1/2 px-5 py-5 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT-sEAvu3hOzoUVrVV8Gn_cVR5wxeNIGXk5L1NrGv&s" alt="" className="w-full mb-3"/>
            <p>
                {props.content}
            </p>
        </section>
    </main>
    )
}