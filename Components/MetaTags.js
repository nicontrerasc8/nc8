import Head from "next/head";

export default function MetaTags({ 
    title = 'Nicolás Contreras | Programador web y UX', 
    description = "¿Tu negocio necesita una página web? Estás en el lugar indicado.", 
    }){

    return <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
    </Head>

}