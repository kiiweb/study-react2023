import Head from "next/head";
import { Mainsec } from 'src/components/Mainsec/Index';
import { Header } from "src/components/Header/Index";
import styles from "src/styles/Home.module.css";
import { useEffect, useState } from "react";


// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = ((e) => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  });

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);


  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <h1>{ count }</h1>
      <button href="/about" onClick={handleClick}>
        btn
      </button>
      <Mainsec page="index"/>
    </div>
  )
}
